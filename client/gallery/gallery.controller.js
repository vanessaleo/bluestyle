angular.module('app').controller('GalleryCtrl', function(GallerySrv,$scope){
GallerySrv.getGallery('gallery').then(function(res){
  $scope.imgs = res;
})
})
