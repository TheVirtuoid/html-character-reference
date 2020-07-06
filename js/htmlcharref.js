( () => {
	const selectTenThousands = document.getElementById("tenthousands");
	const selectThousands = document.getElementById("thousands");
	const selectSizing = document.getElementById("sizing");
	const main = document.querySelector("main");
	selectTenThousands.addEventListener("change", processNewGroup);
	selectThousands.addEventListener("change", processNewPage);
	selectSizing.addEventListener("change", processSizing);

	main.className = selectSizing.value;

	let option = document.createElement("option");
	option.value = "";
	option.selected = true;
	option.textContent = "--Select from list--";
	selectTenThousands.appendChild(option);
	for(let i = 0, l = 130000; i < l; i += 10000) {
		let option = document.createElement("option");
		option.value = `${i},${i + 9999}`;
		option.textContent = `${i}-${i + 9999}`;
		selectTenThousands.appendChild(option);
	}

	function processNewGroup(event) {
		const group = event.target.value;
		if (group) {
			while(selectThousands.firstChild) selectThousands.removeChild(selectThousands.firstChild);
			const groups = group.split(",");
			const startGroup = parseInt(groups[0], 10);
			const endGroup = parseInt(groups[1], 10);
			let option = document.createElement("option");
			option.value = "";
			option.selected = true;
			option.textContent = "--Select from list--";
			selectThousands.appendChild(option);
			for(let i = startGroup, l = endGroup+1; i < l; i += 500) {
				let option = document.createElement("option");
				option.value = `${i},${i + 499}`;
				option.textContent = `${i}-${i + 499}`;
				selectThousands.appendChild(option);
			}
		}
	}

	function processNewPage(event) {
		const page = event.target.value;
		if (page) {
			while(main.firstChild) main.removeChild(main.firstChild);
			const pages = page.split(",");
			const startChar = parseInt(pages[0], 10);
			const endChar = parseInt(pages[1], 10);
			for (let i = startChar; i <= endChar; i++) {
				let div = document.createElement('div');
				div.innerHTML = `<span>&#${i};</span><span>(&amp;#${i};)</span>`;
				main.appendChild(div);
			}
		}
	}

	function processSizing(event) {
		main.className = event.target.value;
	}
})();
