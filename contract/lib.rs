#![cfg_attr(not(feature = "std"), no_std)]

use ink_lang as ink;

#[ink::contract]
mod erc721 {
    #[ink(storage)]
    pub struct MyContract {
        //tokenId -> account
        owners: ink_storage::collections::HashMap<u32, AccountId>,
        balances: ink_storage::collections::HashMap<AccountId, u32>,
        //tokenId -> approved 
        approved: ink_storage::collections::HashMap<u32, AccountId>,
        last_id: u32,
    }
    #[ink(event)]
    pub struct Transfer {
        #[ink(topic)]
        from: AccountId,
        #[ink(topic)]
        to: AccountId,
        #[ink(topic)]
        token_id: u32
    }
    #[ink(event)]
    pub struct Approve {
        #[ink(topic)]
        owner: AccountId,
        #[ink(topic)]
        spender: AccountId,
        #[ink(topic)]
        token_id: u32
    }
    impl MyContract {
        #[ink(constructor)]
        pub fn new() -> Self {
            Self {
                owners: Default::default(),
                balances: Default::default(),
                approved: Default::default(),
                last_id: 1,
            }
        }
        #[ink(message)]
        pub fn balance_of(&self, owner: AccountId) -> u32 {
            *self.balances.get(&owner).unwrap_or(&0)
        }
        #[ink(message)]
        pub fn owner_of(&self, token_id: u32) -> Option<AccountId> {
            self.owners.get(&token_id).cloned()
        } 
        #[ink(message)]
        pub fn get_last_id(&self) -> u32 {
            self.last_id
        }
        #[ink(message)]
        pub fn approve(&mut self, spender: AccountId, token_id: u32) {
            let caller = self.env().caller();
            let result = self.owner_of(token_id);
            match result {
                Some(owner) => {
                    if caller == owner {
                        self.approved.insert(token_id, spender);
                        self.env().emit_event(Approve {
                            owner,
                            spender,
                            token_id
                        });
                    }else {
                        panic!("this is not your token")
                    }
                }
                None => {
                    panic!("this token does not exist")
                }
            }
        }
        #[ink(message)]
        pub fn approval_of(&self, token_id: u32) -> Option<AccountId> {
            self.approved.get(&token_id).copied()
        }
        #[ink(message)]
        pub fn mint(&mut self) {
            let caller = self.env().caller();
            self.owners.insert(self.last_id, caller);
            self.last_id+=1;
            self.increment_balance(caller);
        }
        #[ink(message)]
        pub fn transfer(&mut self, token_id: u32, to: AccountId) {
            let caller = self.env().caller();
            let result = self.owner_of(token_id);
            match result {
                Some(owner) => {            
                    if caller != owner {
                        panic!("you are not the owner")
                    }
                    self.owners.insert(token_id, to);
                    self.decrement_balance(caller);
                    self.increment_balance(to);
                    self.env().emit_event(Transfer{
                        from: caller,
                        to,
                        token_id
                    })
                },
                None => panic!("this token does not exist"),
            }
        }
        #[ink(message)]
        pub fn transfer_from(&mut self, to: AccountId, token_id: u32) {
            let owner = self.owner_of(token_id);
            let caller = self.env().caller();
            let result = self.approval_of(token_id);
            match owner {
                Some(ownr) => {
                    match result {
                        Some(spender) => {
                            if spender != caller {
                                panic!("You are not allowed to spend this token!");
                            }
                            self.owners.insert(token_id, to);
                            self.increment_balance(to);
                            self.approved.insert(token_id, Default::default());
                            self.decrement_balance(ownr);
                            self.env().emit_event(Transfer{
                                from: ownr,
                                to,
                                token_id
                            })
                        }
                        None => panic!("this token does not exist"),
                    }
                }
                None => panic!("Transfer failed"),
            }
        }
        fn increment_balance(&mut self, owner: AccountId) {
            let old_value = self.balance_of(owner);
            self.balances.insert(owner, old_value+1);
        }
        fn decrement_balance(&mut self, owner: AccountId) {
            let old_value = self.balance_of(owner);
            self.balances.insert(owner, old_value-1);
        }
    } 
}