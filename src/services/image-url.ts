import noImage from "../assets/no-image-placeholder.webp";

function getCroppedImageUrl(url: string) {
	if (!url) return noImage;
	let index = url.indexOf("media/") + 6;
	let updatedUrl =
		url.substring(0, index) + "crop/600/400/" + url.substring(index);
	return updatedUrl;
}

export default getCroppedImageUrl;
