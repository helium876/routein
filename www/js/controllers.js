//Route-It

angular.module('JUTC.controllers', [])

.controller('jutcCtrl', function($scope, $rootScope) {
  $scope.locations = [
    /* ------------------------------------*/
    { name: 'Greater Portmore',
      id: 1,
      routes: [
        {
          busNum: '6',
          locationTo: 'Spanish Town',
          via: 'Naggo Head, Passagefort Drive, Gregory Park, Mandela Highway',
          price: "100"
        },
        {
          busNum: '16',
          locationTo: 'Cross Roads',
          via: 'Braeton Parkway, Portmore Toll Road, Marcus Garvey Dr., City',
          price: "100"
        },
        {
          busNum: '16A',
          locationTo: 'Cross Roads',
          via: 'Braeton Road, Portmore Toll Road, Hagley Park Road',
          price: "100"
        },
        {
          busNum: '16B',
          locationTo: 'Constant Spring',
          via: 'Hellshire Main Road, Mandela Highway, Dunrobin',
          price: "100"
        },
        {
          busNum: '17',
          locationTo: 'City',
          via: 'Hellshire Main Road, Portmore Toll Road, Marcus Garvey Drive',
          price: "100"
        },
        {
          busNum: '17A',
          locationTo: 'Half Way Tree',
          via: 'Hellshire Main Road, Portmore Toll Road, Hagley Park Road',
          price: "100"
        },
        {
          busNum: '18',
          locationTo: 'City',
          via: 'Braeton Road, Portmore Toll Road, Marcus Garvey Drive',
          price: "100"
        },
        {
          busNum: '18A',
          locationTo: 'Half Way Tree',
          via: 'Braeton Road, Portmore Toll Road, Hagley Park Road',
          price: "100"
        },
        {
          busNum: '20',
          locationTo: 'City',
          via: 'Braeton Parkway, Portmore Toll Road, Marcus Garvey Dr.',
          price: "100"
        },
        {
          busNum: '20A',
          locationTo: 'Half Way Tree',
          via: 'Braeton Parkway, Portmore Toll Road, Hagley Park Road',
          price: "100"
        },
        {
          busNum: '16Bx',
          locationTo: 'Constant Spring',
          via: 'Hellshire Main Road, Mandela Highway, Dunrobin',
          price: "160"
        },
        {
          busNum: '17Ax',
          locationTo: 'New Kingston',
          via: 'Hellshire Main Road, Portmore Toll Road, Hagley Park Road, Half Way Tree',
          price: "160"
        },
        {
          busNum: '17Ex',
          locationTo: 'Cross Roads',
          via: 'Hellshire Main Road, Portmore Toll Road, Marcus Garvey Drive',
          price: "180"
        },
        {
          busNum: '19Ax',
          locationTo: 'Papine',
          via: 'Hellshire Main Road, Portmore Toll Road, Hagley Park Road, Hope Road',
          price: "180"
        },
        {
          busNum: '20Ax',
          locationTo: 'New Kingston',
          via: 'Braeton Parkway, Portmore Toll Road, Hagley Park Road',
          price: "160"
        },
        {
          busNum: '101',
          locationTo: 'Constant Spring',
          via: 'Braeton Road, Mandela Highway, Molynes Road',
          price: "100"
        },
        {
          busNum: '316',
          locationTo: 'Cross Roads',
          via: 'Hellshire Main Road, Mandela Highway, New Kingston',
          price: "200"
        },
        {
          busNum: '317',
          locationTo: 'Cross Roads',
          via: 'Hellshire Main Road, Portmore Toll Road, Marcus Garvey Drive, City',
          price: "200"
        },
        {
          busNum: '318',
          locationTo: 'Cross Roads',
          via: 'Braeton Parkway, Half Way Tree, New Kingston',
          price: "200"
        },
        {
          busNum: '319',
          locationTo: 'Papine',
          via: 'Hellshire Main Road, Portmore Toll Road, Hagley Park Road, Hope Road',
          price: "220"
        },
        {
          busNum: '320',
          locationTo: 'Cross Roads',
          via: 'Braeton Parkway, Portmore Toll Road, Half Way Tree Road',
          price: "200"
        }
      ]
    },
    /* ------------------------------------*/
    { name: 'Spanish Town',
      id: 2,
      routes: [
        {
          busNum: '103',
          locationTo: 'Cross Roads',
          via: 'Washington Boulevard, Molynes Road, New Kingston',
          price: "100"
        },
        {
          busNum: '21',
          locationTo: 'Half Way Tree',
          via: 'Washington Boulevard, Molynes Road',
          price: "100"
        },
        {
          busNum: '22',
          locationTo: 'City',
          via: 'Spanish Town Road',
          price: "100"
        },
        {
          busNum: '22A',
          locationTo: 'City',
          via: 'Marcus Garvey Drive',
          price: "100"
        },
        {
          busNum: '23A',
          locationTo: 'Half Way Tree',
          via: 'Washington Blvd., Dunrobin Avenue',
          price: "100"
        },
        {
          busNum: '21Ax',
          locationTo: 'Cross Roads',
          via: 'Washington Boulevard, Molynes Road, New Kingston',
          price: "160"
        },
        {
          busNum: '21Ex',
          locationTo: 'Cross Roads',
          via: 'Washington Boulevard, Molynes Road, Half Way Tree Road',
          price: "160"
        },
        {
          busNum: '22Ax',
          locationTo: 'City',
          via: 'Marcus Garvey Drive',
          price: "160"
        }
      ]
    },
    /* ------------------------------------*/
    { name: 'Half Way Tree',
      id: 3,
      routes: [
        {
          busNum: '500',
          locationTo: 'City',
          via: 'Cross Roads, Slipe Road',
          price: "100"
        },
        {
          busNum: '800',
          locationTo: 'Cross Roads',
          via: 'New Kingston',
          price: "100"
        },
        {
          busNum: '83',
          locationTo: 'City',
          via: 'Mountain View Avenue',
          price: "100"
        },
        {
          busNum: '83Ex',
          locationTo: 'City',
          via: 'Mountain View Avenue',
          price: "130"
        },
        {
          busNum: '600',
          locationTo: 'City',
          via: 'Cross Roads, Heroes Circle, East Street',
          price: "100"
        },
        {
          busNum: '700',
          locationTo: 'City',
          via: 'Lyndhurst Road, Slipe Pen Road',
          price: "100"
        },
        {
          busNum: '900',
          locationTo: 'Papine',
          via: 'Hope Road',
          price: "100"
        }
      ]
    },
    /* ------------------------------------*/
    { name: 'City',
      id: 4,
      routes: [
        {
          busNum: '315',
          locationTo: 'Greater Portmore',
          via: 'Marcus Garvey Drive, Portmore Toll Road, Braeton Parkway',
          price: "200"
        }
      ]
    },
    /* ------------------------------------*/
    { name: 'Cross Roads',
      id: 5,
      routes: [
        {
          busNum: '86',
          locationTo: 'City',
          via: 'South Camp Road, East Street, Port Royal Street',
          price: "100"
        },
        {
          busNum: '88',
          locationTo: 'City',
          via: 'Mountain View Avenue, Deanery Road, East Street',
          price: "100"
        }
      ]
    },
    /* ------------------------------------*/
    { name: 'Harbour View',
      id: 6,
      routes: [
        {
          busNum: '295',
          locationTo: 'Half Way Tree',
          via: 'Mountain View Avenue, New Kingston',
          price: "200"
        },
        {
          busNum: '99',
          locationTo: 'City',
          via: 'Sir Florizel Glaspole Highway, Windward Road',
          price: "100"
        },
        {
          busNum: '99Ex',
          locationTo: 'Harbour View',
          via: 'Sir Florizel Glaspole Highway, Windward Road',
          price: "130"
        },
        {
          busNum: '102',
          locationTo: 'August Town',
          via: 'East Street, Half Way Tree Road, Papine',
          price: ""
        }
      ]
    },
    /* ------------------------------------*/
    { name: 'Bull Bay',
      id: 7,
      routes: [
        {
          busNum: '97',
          locationTo: 'City',
          via: 'Sir Florizel Glaspole Highway, Windward Road',
          price: "100"
        },
        {
          busNum: '97Ex',
          locationTo: 'City',
          via: 'Sir Florizel Glaspole Highway, Windward Road',
          price: "130"
        }
      ]
    },
    /* ------------------------------------*/
    { name: 'Norbrook',
      id: 8,
      routes: [
        {
          busNum: '49',
          locationTo: 'Half Way Tree',
          via: 'Shortwood Road',
          price: "100"
        }
      ]
    },
    /* ------------------------------------*/
    { name: 'Hellshire',
      id: 9,
      routes: [
        {
          busNum: '1',
          locationTo: 'City',
          via: 'Naggo Head, Portmore Toll Road, Marcus Garvey Drive',
          price: "100"
        },
        {
          busNum: '1A',
          locationTo: 'Half Way Tree',
          via: 'Naggo Head, Portmore Toll Road, Hagley Park Road',
          price: "100"
        },
        {
          busNum: '301',
          locationTo: 'Cross Roads',
          via: 'Hellshire Main Road, Portmore Toll Road, New Kingston',
          price: "200"
        }
      ]
    },
    /* ------------------------------------*/
    { name: 'Christian Gardens',
      id: 10,
      routes: [
        {
          busNum: '3',
          locationTo: 'City',
          via: 'Passagefort Drive, Portmore Toll Road, Marcus Garvey Drive',
          price: "100"
        },
        {
          busNum: '3A',
          locationTo: 'Half Way Tree',
          via: 'Passagefort Drive, Portmore Toll Road, Hagley Park Road',
          price: "100"
        },
        {
          busNum: '4',
          locationTo: 'Cross Roads',
          via: 'Passagefort Drive, Portmore Toll Road, Marcus Garvey Dr., City',
          price: "100"
        },
        {
          busNum: '3Ax',
          locationTo: 'New Kingston',
          via: 'Passagefort Drive, Portmore Toll Road, Hagley Park Road, Half Way Tree',
          price: "160"
        },
        {
          busNum: '303',
          locationTo: 'Papine',
          via: 'Waterford, Portmore Toll Road, Hope Road',
          price: "200"
        }
      ]
    },
    { name: 'Naggo Head',
      id: 11,
      routes: [
        {
          busNum: '8',
          locationTo: 'City',
          via: 'Garveymeade, Westchester, Portmore Toll Road, Marcus Garvey Dr.',
          price: "100"
        },
        {
          busNum: '8A',
          locationTo: 'Half Way Tree',
          via: 'Garveymeade, Westchester, Portmore Toll Road, Hagley Park Road',
          price: "100"
        },
        {
          busNum: '12',
          locationTo: 'City',
          via: 'Cumberland, Portmore Toll Road, Marcus Garvey Drive',
          price: "100"
        },
        {
          busNum: '12A',
          locationTo: 'Half Way Tree',
          via: 'Cumberland, Portmore Toll Road, Hagley Park Road',
          price: "100"
        },
        {
          busNum: '8Ax',
          locationTo: 'New Kingston',
          via: 'Garveymeade, Westchester, Portmore Toll Road, Half Way Tree',
          price: "160"
        },
        {
          busNum: '308',
          locationTo: 'New Kingston',
          via: 'Portmore Toll Road, Hope Road',
          price: "200"
        }
      ]
    },
    /* ------------------------------------*/
    { name: 'Constant Spring',
      id: 12,
      routes: [
        {
          busNum: '42',
          locationTo: 'Half Way Tree',
          via: 'Constant Spring Road',
          price: "100"
        }
      ]
    },
    /* ------------------------------------*/
    { name: 'Above Rocks',
      id: 13,
      routes: [
        {
          busNum: '53',
          locationTo: 'Half Way Tree',
          via: 'Stony Hill, Constant Spring Road',
          price: "100"
        }
      ]
    },
    /* ------------------------------------*/
    { name: 'Border',
      id: 14,
      routes: [
        {
          busNum: '54',
          locationTo: 'Half Way Tree',
          via: 'Lawrence Tavern, Stony Hill, Golden Spring, Constant Spring Road',
          price: "100"
        }
      ]
    },
    /* ------------------------------------*/
    { name: 'Inswood Village',
      id: 15,
      routes: [
        {
          busNum: '121',
          locationTo: 'City',
          via: 'Washington Boulevard, Molynes Road, New Kingston',
          price: "220"
        }
      ]
    },
    /* ------------------------------------*/
    { name: 'Ensom Acres',
      id: 16,
      routes: [
        {
          busNum: '123',
          locationTo: 'Cross Roads',
          via: 'Washington Boulevard, Molynes Road, New Kingston',
          price: "200"
        }
      ]
    },
    /* ------------------------------------*/
    { name: 'Ebony Vale',
      id: 17,
      routes: [
        {
          busNum: '124',
          locationTo: 'City',
          via: 'Molynes Road, New Kingston, Slipe Road',
          price: "220"
        }
      ]
    },
    /* ------------------------------------*/
    { name: 'Green Acres/Mercury Gdns',
      id: 18,
      routes: [
        {
          busNum: '125',
          locationTo: 'Cross Roads',
          via: 'Washington Boulevard, Molynes Road, New Kingston',
          price: "220"
        }
      ]
    },
    /* ------------------------------------*/
    { name: 'White Waters',
      id: 19,
      routes: [
        {
          busNum: '126',
          locationTo: 'Cross Roads',
          via: 'Washington Boulevard, Molynes Road, New Kingston',
          price: "220"
        }
      ]
    },
    /* ------------------------------------*/
    { name: 'Angels/ Eltham ',
      id: 20,
      routes: [
        {
          busNum: '127',
          locationTo: 'Cross Roads',
          via: 'Washington Boulevard, Molynes Road, New Kingston',
          price: "220"
        },
        {
          busNum: '129',
          locationTo: 'City',
          via: 'Molynes Road, New Kingston, Slipe Road',
          price: "220"
        }
      ]
    },
    /* ------------------------------------*/
    { name: 'Angels',
      id: 21,
      routes: [
        {
          busNum: '128',
          locationTo: 'Papine',
          via: 'Washington Boulevard, Molynes Road, Hope Road',
          price: "230"
        }
      ]
    },
    /* ------------------------------------*/
    { name: 'Longville',
      id: 22,
      routes: [
        {
          busNum: '130',
          locationTo: 'City',
          via: 'Molynes Road, New Kingston, Slipe Road',
          price: "320"
        }
      ]
    },
    /* ------------------------------------*/
    { name: 'Cumberland ',
      id: 23,
      routes: [
        {
          busNum: '312',
          locationTo: 'Cross Roads',
          via: 'Portmore Toll Road, Hagley Park Rd., New Kingston',
          price: "200"
        },
        {
          busNum: '314',
          locationTo: 'New Kingston',
          via: 'Cumberland, Portmore Toll Road, Marcus Garvey Drive, City, Cross Roads',
          price: "200"
        }
      ]
    },
    /* ------------------------------------*/
    { name: 'Pembroke Hall',
      id: 24,
      routes: [
        {
          busNum: '30',
          locationTo: 'City',
          via: 'Waltham Park Road, Spanish Town Road',
          price: "100"
        }
      ]
    },
    /* ------------------------------------*/
    { name: 'Chancery Street',
      id: 25,
      routes: [
        {
          busNum: '31',
          locationTo: 'City',
          via: 'Weymouth Drive, Spanish Town Road',
          price: "100"
        },
        {
          busNum: '31A',
          locationTo: 'City',
          via: 'Weymouth Drive, Marcus Garvey Drive',
          price: "100"
        },
        {
          busNum: '47',
          locationTo: 'Half Way Tree',
          via: 'Molynes Road',
          price: "100"
        },
        {
          busNum: '31Ax',
          locationTo: 'City',
          via: 'Weymouth Drive, Marcus Garvey Drive',
          price: "130"
        },
        {
          busNum: '47Ex',
          locationTo: 'Cross Roads',
          via: 'Molynes Road, Lyndhurst Road',
          price: "130"
        }
      ]
    },
    /* ------------------------------------*/
    { name: 'Cooreville Gardens',
      id: 26,
      routes: [
        {
          busNum: '32',
          locationTo: 'Half Way Tree',
          via: 'Duhaney Park, Washington Blvd., Dunrobin Avenue',
          price: "100"
        }
      ]
    },
    /* ------------------------------------*/
    { name: 'Great House Circle',
      id: 27,
      routes: [
        {
          busNum: '44',
          locationTo: 'Half Way Tree',
          via: 'Havendale, Whitehall Avenue, Red Hills Road',
          price: "100"
        },
        {
          busNum: '46',
          locationTo: 'Half Way Tree',
          via: 'Meadowbrook, Red Hills Road',
          price: "100"
        },
        {
          busNum: '46Ax',
          locationTo: 'Half Way Tree',
          via: 'Meadowbrook, Red Hills Road',
          price: "160"
        }
      ]
    },
    /* ------------------------------------*/
    { name: 'Seaview',
      id: 28,
      routes: [
        {
          busNum: '50',
          locationTo: 'Half Way Tree',
          via: 'Hagley Park Road',
          price: "100"
        }
      ]
    },
    /* ------------------------------------*/
    { name: 'Duhaney Park',
      id: 29,
      routes: [
        {
          busNum: '32Ax',
          locationTo: 'Half Way Tree',
          via: 'Duhaney Park, Dunrobin Avenue',
          price: "130"
        }
      ]
    },
    /* ------------------------------------*/
    { name: 'Three Miles',
      id: 30,
      routes: [
        {
          busNum: '51',
          locationTo: 'Half Way Tree',
          via: 'Hagley Park Road',
          price: "100"
        },
        {
          busNum: '51Ex',
          locationTo: 'Papine',
          via: 'Hagley Park Rd., Half Way Tree, Hope Road',
          price: "130"
        }
      ]
    },
    /* ------------------------------------*/
    { name: 'Gordon Town',
      id: 31,
      routes: [
        {
          busNum: '61',
          locationTo: 'City',
          via: 'Old Hope Road, Tom Redcam Drive, Marescaux Road, East Street',
          price: "100"
        }
      ]
    },
    /* ------------------------------------*/
    { name: 'Hermitage',
      id: 32,
      routes: [
        {
          busNum: '66',
          locationTo: 'City',
          via: 'Mona Road, South Camp Road',
          price: "100"
        }
      ]
    },
    /* ------------------------------------*/
    { name: 'Irvine Hall',
      id: 33,
      routes: [
        {
          busNum: '68',
          locationTo: 'City',
          via: 'Hope Pastures, Old Hope Road, Cross Roads',
          price: "100"
        }
      ]
    },
    /* ------------------------------------*/
    { name: 'August Town',
      id: 34,
      routes: [
        {
          busNum: '72',
          locationTo: 'Half Way Tree',
          via: 'Mona Road, Hope Road',
          price: "100"
        },
        {
          busNum: '77',
          locationTo: 'City',
          via: 'Mountain View Avenue',
          price: "100"
        },
        {
          busNum: '78',
          locationTo: 'City',
          via: 'Papine, Cross Roads',
          price: "100"
        },
        {
          busNum: '77Ex',
          locationTo: 'City',
          via: 'Mountain View Avenue',
          price: "130"
        },
        {
          busNum: '78Ex',
          locationTo: 'City',
          via: 'Papine, Cross Roads',
          price: "130"
        }
      ]
    },
    /* ------------------------------------*/
    { name: 'Barbican',
      id: 35,
      routes: [
        {
          busNum: '76',
          locationTo: 'City',
          via: 'East Kings House Road, New Kingston, Marescaux Road',
          price: "100"
        }
      ]
    },
    /* ------------------------------------*/
    { name: 'Rollington Town',
      id: 36,
      routes: [
        {
          busNum: '81',
          locationTo: 'City',
          via: 'South Camp Road, East Street',
          price: "100"
        }
      ]
    },
    /* ------------------------------------*/
    { name: 'Norman Gardens',
      id: 37,
      routes: [
        {
          busNum: '84',
          locationTo: 'City',
          via: 'Windward Road',
          price: "100"
        }
      ]
    },
    /* ------------------------------------*/
    { name: 'Rennock Lodge',
      id: 38,
      routes: [
        {
          busNum: '85',
          locationTo: 'City',
          via: 'Windward Road',
          price: "100"
        }
      ]
    },
    /* ------------------------------------*/
    { name: 'Manley Meadows',
      id: 39,
      routes: [
        {
          busNum: '87',
          locationTo: 'City',
          via: 'Windward Road',
          price: "100"
        }
      ]
    },
    /* ------------------------------------*/
    { name: 'Vineyard Town',
      id: 40,
      routes: [
        {
          busNum: '89',
          locationTo: 'City',
          via: 'Deanery Road, Upper Elleston Road',
          price: "100"
        }
      ]
    },
    /* ------------------------------------*/
    { name: 'Port Royal ',
      id: 41,
      routes: [
        {
          busNum: '98',
          locationTo: 'City',
          via: 'Sir Florizel Glaspole Highway, Windward Road',
          price: "100"
        },
        {
          busNum: '98Ex',
          locationTo: 'City',
          via: 'Sir Florizel Glaspole Highway, Windward Road',
          price: "130"
        }
      ]
    },
    /* ------------------------------------*/
    { name: 'Golden Spring',
      id: 42,
      routes: [
        {
          busNum: '52Ex',
          locationTo: 'City',
          via: 'Constant Spring, Half Way Tree, Cross Roads, Slipe Road',
          price: "130"
        }
      ]
    },
    /* ------------------------------------*/
    { name: 'Six Miles',
      id: 43,
      routes: [
        {
          busNum: '75Ex',
          locationTo: 'Papine',
          via: 'Molynes Road, Half Way Tree, Hope Road',
          price: "130"
        }
      ]
    }
  ];

  $scope.getData = function(val){
    $rootScope.selectedData = val; 
  }
})
