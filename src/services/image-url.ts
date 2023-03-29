function getCroppedImageUrl(url: string) {
	let index = url.indexOf("games/");
	let updatedUrl =
		url.substring(0, index) + "crop/600/400/" + url.substring(index);
	return updatedUrl;
}

export default getCroppedImageUrl;
