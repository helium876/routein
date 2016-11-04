//Route-It

angular.module('JUTC.controllers', [])

.controller('jutcCtrl', function($scope, $rootScope) {
  $scope.locations = [
    /* ------------------------------------*/
    { name: 'Greater Portmore',
      id: 1,
      routes: [
        {
          busNum: '17A',
          locationTo: 'Half Way Tree',
          via: 'Hellshire Main Road, Portmore Toll Road, Hagley Park Road',
          price: ""
        },
        {
          busNum: '18',
          locationTo: 'City',
          via: 'Braeton Road, Portmore Toll Road, Marcus Garvey Drive',
          price: ""
        },
        {
          busNum: '18A',
          locationTo: 'Half Way Tree',
          via: 'Braeton Road, Portmore Toll Road, Hagley Park Road',
          price: ""
        },
        {
          busNum: '18A',
          locationTo: 'Half Way Tree',
          via: 'Braeton Road, Portmore Toll Road, Hagley Park Road',
          price: ""
        },
        {
          busNum: '18A',
          locationTo: 'Half Way Tree',
          via: 'Braeton Road, Portmore Toll Road, Hagley Park Road',
          price: ""
        }
      ]
    },
    /* ------------------------------------*/
    { name: 'Spanish Town',
      id: 2,
      routes: [
        {
          busNum: '18A',
          locationTo: 'Half Way Tree',
          via: 'Braeton Road, Portmore Toll Road, Hagley Park Road',
          price: ""
        },
        {
          busNum: '18A',
          locationTo: 'Half Way Tree',
          via: 'Braeton Road, Portmore Toll Road, Hagley Park Road',
          price: ""
        },
        {
          busNum: '18A',
          locationTo: 'Half Way Tree',
          via: 'Braeton Road, Portmore Toll Road, Hagley Park Road',
          price: ""
        },
        {
          busNum: '18A',
          locationTo: 'Half Way Tree',
          via: 'Braeton Road, Portmore Toll Road, Hagley Park Road',
          price: ""
        },
        {
          busNum: '18A',
          locationTo: 'Half Way Tree',
          via: 'Braeton Road, Portmore Toll Road, Hagley Park Road',
          price: ""
        }
      ]
    },
    /* ------------------------------------*/
    { name: 'Half Way Tree',
      id: 3,
      routes: [
        {
          busNum: '18A',
          locationTo: 'Half Way Tree',
          via: 'Braeton Road, Portmore Toll Road, Hagley Park Road',
          price: ""
        },
        {
          busNum: '18A',
          locationTo: 'Half Way Tree',
          via: 'Braeton Road, Portmore Toll Road, Hagley Park Road',
          price: ""
        },
        {
          busNum: '18A',
          locationTo: 'Half Way Tree',
          via: 'Braeton Road, Portmore Toll Road, Hagley Park Road',
          price: ""
        },
        {
          busNum: '18A',
          locationTo: 'Half Way Tree',
          via: 'Braeton Road, Portmore Toll Road, Hagley Park Road',
          price: ""
        },
        {
          busNum: '18A',
          locationTo: 'Half Way Tree',
          via: 'Braeton Road, Portmore Toll Road, Hagley Park Road',
          price: ""
        }
      ]
    },
    /* ------------------------------------*/
    { name: 'Papine',
      id: 4,
      routes: [
        {
          busNum: '18A',
          locationTo: 'Half Way Tree',
          via: 'Braeton Road, Portmore Toll Road, Hagley Park Road',
          price: ""
        },
        {
          busNum: '18A',
          locationTo: 'Half Way Tree',
          via: 'Braeton Road, Portmore Toll Road, Hagley Park Road',
          price: ""
        },
        {
          busNum: '18A',
          locationTo: 'Half Way Tree',
          via: 'Braeton Road, Portmore Toll Road, Hagley Park Road',
          price: ""
        },
        {
          busNum: '18A',
          locationTo: 'Half Way Tree',
          via: 'Braeton Road, Portmore Toll Road, Hagley Park Road',
          price: ""
        },
        {
          busNum: '18A',
          locationTo: 'Half Way Tree',
          via: 'Braeton Road, Portmore Toll Road, Hagley Park Road',
          price: ""
        }
      ]
    },
    /* ------------------------------------*/
    { name: 'City',
      id: 5,
      routes: [
        {
          busNum: '18A',
          locationTo: 'Half Way Tree',
          via: 'Braeton Road, Portmore Toll Road, Hagley Park Road',
          price: ""
        },
        {
          busNum: '18A',
          locationTo: 'Half Way Tree',
          via: 'Braeton Road, Portmore Toll Road, Hagley Park Road',
          price: ""
        },
        {
          busNum: '18A',
          locationTo: 'Half Way Tree',
          via: 'Braeton Road, Portmore Toll Road, Hagley Park Road',
          price: ""
        },
        {
          busNum: '18A',
          locationTo: 'Half Way Tree',
          via: 'Braeton Road, Portmore Toll Road, Hagley Park Road',
          price: ""
        },
        {
          busNum: '18A',
          locationTo: 'Half Way Tree',
          via: 'Braeton Road, Portmore Toll Road, Hagley Park Road',
          price: ""
        }
      ]
    },
    /* ------------------------------------*/
    { name: 'Cross Roads',
      id: 6,
      routes: [
        {
          busNum: '18A',
          locationTo: 'Half Way Tree',
          via: 'Braeton Road, Portmore Toll Road, Hagley Park Road',
          price: ""
        },
        {
          busNum: '18A',
          locationTo: 'Half Way Tree',
          via: 'Braeton Road, Portmore Toll Road, Hagley Park Road',
          price: ""
        },
        {
          busNum: '18A',
          locationTo: 'Half Way Tree',
          via: 'Braeton Road, Portmore Toll Road, Hagley Park Road',
          price: ""
        },
        {
          busNum: '18A',
          locationTo: 'Half Way Tree',
          via: 'Braeton Road, Portmore Toll Road, Hagley Park Road',
          price: ""
        },
        {
          busNum: '18A',
          locationTo: 'Half Way Tree',
          via: 'Braeton Road, Portmore Toll Road, Hagley Park Road',
          price: ""
        }
      ]
    },
    /* ------------------------------------*/
    { name: 'Harbour View',
      id: 7,
      routes: [
        {
          busNum: '18A',
          locationTo: 'Half Way Tree',
          via: 'Braeton Road, Portmore Toll Road, Hagley Park Road',
          price: ""
        },
        {
          busNum: '18A',
          locationTo: 'Half Way Tree',
          via: 'Braeton Road, Portmore Toll Road, Hagley Park Road',
          price: ""
        },
        {
          busNum: '18A',
          locationTo: 'Half Way Tree',
          via: 'Braeton Road, Portmore Toll Road, Hagley Park Road',
          price: ""
        },
        {
          busNum: '18A',
          locationTo: 'Half Way Tree',
          via: 'Braeton Road, Portmore Toll Road, Hagley Park Road',
          price: ""
        },
        {
          busNum: '18A',
          locationTo: 'Half Way Tree',
          via: 'Braeton Road, Portmore Toll Road, Hagley Park Road',
          price: ""
        }
      ]
    },
    /* ------------------------------------*/
    { name: 'Bull Bay',
      id: 8,
      routes: [
        {
          busNum: '18A',
          locationTo: 'Half Way Tree',
          via: 'Braeton Road, Portmore Toll Road, Hagley Park Road',
          price: ""
        },
        {
          busNum: '18A',
          locationTo: 'Half Way Tree',
          via: 'Braeton Road, Portmore Toll Road, Hagley Park Road',
          price: ""
        },
        {
          busNum: '18A',
          locationTo: 'Half Way Tree',
          via: 'Braeton Road, Portmore Toll Road, Hagley Park Road',
          price: ""
        },
        {
          busNum: '18A',
          locationTo: 'Half Way Tree',
          via: 'Braeton Road, Portmore Toll Road, Hagley Park Road',
          price: ""
        },
        {
          busNum: '18A',
          locationTo: 'Half Way Tree',
          via: 'Braeton Road, Portmore Toll Road, Hagley Park Road',
          price: ""
        }
      ]
    },
    /* ------------------------------------*/
    { name: 'Norbrook',
      id: 9,
      routes: [
        {
          busNum: '18A',
          locationTo: 'Half Way Tree',
          via: 'Braeton Road, Portmore Toll Road, Hagley Park Road',
          price: ""
        },
        {
          busNum: '18A',
          locationTo: 'Half Way Tree',
          via: 'Braeton Road, Portmore Toll Road, Hagley Park Road',
          price: ""
        },
        {
          busNum: '18A',
          locationTo: 'Half Way Tree',
          via: 'Braeton Road, Portmore Toll Road, Hagley Park Road',
          price: ""
        },
        {
          busNum: '18A',
          locationTo: 'Half Way Tree',
          via: 'Braeton Road, Portmore Toll Road, Hagley Park Road',
          price: ""
        },
        {
          busNum: '18A',
          locationTo: 'Half Way Tree',
          via: 'Braeton Road, Portmore Toll Road, Hagley Park Road',
          price: ""
        }
      ]
    },
    /* ------------------------------------*/
    { name: 'Hellshire ',
      id: 10,
      routes: [
        {
          busNum: '18A',
          locationTo: 'Half Way Tree',
          via: 'Braeton Road, Portmore Toll Road, Hagley Park Road',
          price: ""
        },
        {
          busNum: '18A',
          locationTo: 'Half Way Tree',
          via: 'Braeton Road, Portmore Toll Road, Hagley Park Road',
          price: ""
        },
        {
          busNum: '18A',
          locationTo: 'Half Way Tree',
          via: 'Braeton Road, Portmore Toll Road, Hagley Park Road',
          price: ""
        },
        {
          busNum: '18A',
          locationTo: 'Half Way Tree',
          via: 'Braeton Road, Portmore Toll Road, Hagley Park Road',
          price: ""
        },
        {
          busNum: '18A',
          locationTo: 'Half Way Tree',
          via: 'Braeton Road, Portmore Toll Road, Hagley Park Road',
          price: ""
        }
      ]
    }
  ];

  $scope.getData = function(val){
    $rootScope.selectedData = val; 
  }
})
