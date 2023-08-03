function showPreview(imageUrl) {
  var previewImage = document.getElementById('preview-image');
  previewImage.src = imageUrl;
  var previewContainer = document.getElementById('preview-container');
  previewContainer.style.display = 'block';
}
  
function hidePreview() {
  var previewContainer = document.getElementById('preview-container');
  previewContainer.style.display = 'none';
}
  