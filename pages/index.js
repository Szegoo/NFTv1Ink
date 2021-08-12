import Web3 from 'web3';
import React from 'react';
import axios from 'axios';
import { ApiPromise, WsProvider } from '@polkadot/api';
import {ABI} from '../ABI';

const web3 = new Web3(Web3.givenProvider);
const contractAddress = "5GAZJRVujE38NwxxVXNpKFbKyiJ8GomUA4jL1sW2iw6h3CV3";

export default class Index extends React.PureComponent {
	state = {
		lastId: 0,
		collectibles: null
	}
	componentDidMount() {
		this.collectible = new FormData();
		this.enable();
	}
	enable = async() => {
		if(window !== undefined) {
			const ContractPromise = (await import("@polkadot/api-contract")).ContractPromise;
			const web3Enable = (await import("@polkadot/extension-dapp")).web3Enable;
			const web3Accounts = (await import("@polkadot/extension-dapp")).web3Accounts;
			const web3FromAddress = (await import("@polkadot/extension-dapp")).web3FromAddress;
			const allInjected = await web3Enable('my cool dapp');
			if(allInjected.length === 0) {
			return;
			}
			const allAccounts = await web3Accounts();
			let account = allAccounts[0];
			console.log(allInjected);

			const provider = new WsProvider('ws://127.0.0.1:9944');
			const api = await ApiPromise.create({ provider });
			const contract = new ContractPromise(api, ABI, contractAddress);

			var { gasConsumed, result, output } = await contract.query.getLastId(account.address, { value: 0, gasLimit: -1 });
			console.log(result.toHuman());
			let collectibles = [];
			if(result.isOk) {
			let lastId = output.toHuman();
			console.log(lastId);
			for(let i = 1, j=0; i < lastId; i++) {
					var {gasConsumed, result, output} = await contract.query.ownerOf(account.address, {value: 0, gasLimit: -1},i);
					if(result.isOk) {
						console.log(output.toHuman());
						if(account.address.toLowerCase() === output.toHuman().toLowerCase()) {
							let url = "http://localhost:3000/api/nft?id="+i;
							console.log(url);
							collectibles[j] = (await axios.get(url)).data;
							j++;
						}
					}
			} 
			this.setState({lastId});
			}else {
				console.log(result.toHuman());
			}
			this.setState({collectibles});
		}
	}
	mint = async() => {
		if(window !== undefined) {
			const ContractPromise = (await import("@polkadot/api-contract")).ContractPromise;
			const web3Enable = (await import("@polkadot/extension-dapp")).web3Enable;
			const web3Accounts = (await import("@polkadot/extension-dapp")).web3Accounts;
			const web3FromAddress = (await import("@polkadot/extension-dapp")).web3FromAddress;
			const {lastId} = this.state;
			const allInjected = await web3Enable('my cool dapp');
			if(allInjected.length === 0) {
			return;
			}
			console.log(allInjected);
			const allAccounts = await web3Accounts();
			let account = allAccounts[0];
			console.log(allInjected);

			const provider = new WsProvider('ws://127.0.0.1:9944');
			const api = await ApiPromise.create({ provider });
			const contract = new ContractPromise(api, ABI, contractAddress);
			console.log(account);
			const injector = await web3FromAddress(account.address);
			console.log(contract.tx);
			const gasLimit = 3000n * 10000000n;
			await contract.tx
			.mint({ value:0, gasLimit })
			.signAndSend(account.address,{signer: injector.signer}, async(result) => {
				if (result.status.isInBlock) {
					console.log('in a block');
				} else if (result.status.isFinalized) {
					console.log('finalized');
					this.collectible.set('id', lastId)
					await axios.post("/api/add-nft", this.collectible);
					this.enable();
				}
			});
		}
	}
	handleChange = (e) => {
		this.collectible.set("image", e.target.files[0]);
	}
	render() {
		let {collectibles} = this.state;
		console.log(collectibles);
		return (
			<div>
				<h1 className="title">
					Napravi svoj kolekcionarski token
				</h1>
				<label htmlFor="image">
					Postavi sliku svog kolekcionarskog tokena
					(slike se smanjuju na 500x500px)
				</label>
				<input onChange={this.handleChange} name="image" type="file"/>
				<button onClick={this.mint}>Create</button>
				<h2>Your NFT's: </h2>
				<div className="collectibles">
				{collectibles&& collectibles.map(collectible => 
					<div key={collectible.id} className="collectible">
						<img src={collectible.image}/>
						<p>id: {collectible.id}</p>
					</div>
				)}
				</div>
			</div>
		)
	}
}