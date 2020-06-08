document.querySelectorAll("#nav li").forEach(function (navEl) {
	navEl.onclick = function () { toggleTab(this.id, this.dataset.target); }
});

function toggleTab(selectedNav, targetId) {
	var navEls = document.querySelectorAll("#nav li");

	navEls.forEach(function (navEl) {
		if (navEl.id == selectedNav) {
			navEl.classList.add("is-active");
		} else {
			if (navEl.classList.contains("is-active")) {
				navEl.classList.remove("is-active");
			}
		}
	});
	$('#panel').load(targetId);
}