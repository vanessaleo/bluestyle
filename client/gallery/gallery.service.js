angular.module('app').service('GallerySrv', function($http){
  var getGallery= function(dir){
  return $http({
    method: 'GET',
    url: 'http://localhost/bluestyle/gallery.php?dir=' + dir
  })
  .then(function(res){
    return res.data;
  })
}

return{
  getGallery: getGallery,
}
})
