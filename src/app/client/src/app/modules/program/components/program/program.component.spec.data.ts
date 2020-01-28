export const addParticipentResponseSample = {
  id: 'api.add.participants',
  params: {
    status: 'successful'
  },
  responseCode: 'OK',
  result: {
    created: 'OK',
    programId: '6835f250-1fe1-11ea-93ea-2dffbaedca40'
  },
  ts: '2019-12-17T10:10:16.555Z',
  ver: '1.0'
};
export const frameWorkData = {
  'err': null,
  'frameworkdata': {
    'NCFCOPY': {
      'identifier': 'NCFCOPY',
      'code': 'NCFCOPY',
      'translations': '{"hi":"एनसीएफ कॉपी","ka":"ncf ನಕಲಿಸಿ"}',
      'name': 'AP Board',
      'description': ' NCF framework..',
      'categories': [
        {
          'identifier': 'ncfcopy_board',
          'code': 'board',
          'terms': [
            {
              'associations': [
                {
                  'identifier': 'ncfcopy_gradelevel_kindergarten',
                  'code': 'kindergarten',
                  'translations': '{"hi":"बाल विहार"}',
                  'name': 'Kindergarten',
                  'description': '',
                  'category': 'gradeLevel',
                  'status': 'Live'
                },
              ],
              'identifier': 'ncfcopy_board_ncert',
              'code': 'ncert',
              'translations': null,
              'name': 'NCERT',
              'description': '',
              'index': 1,
              'category': 'board',
              'status': 'Live'
            },
          ],
          'translations': null,
          'name': 'Curriculum',
          'description': '',
          'index': 1,
          'status': 'Live'
        },
        {
          'identifier': 'ncfcopy_subject',
          'code': 'subject',
          'terms': [
            {
              'identifier': 'ncfcopy_subject_mathematics',
              'code': 'mathematics',
              'children': [
                {
                  'identifier': 'ncfcopy_subject_arithmetics',
                  'code': 'arithmetics',
                  'translations': null,
                  'name': 'Arithmetics',
                  'description': 'Arithmetics',
                  'index': 1,
                  'category': 'subject',
                  'status': 'Live'
                }
              ],
              'translations': null,
              'name': 'Math',
              'description': 'Mathematics',
              'index': 1,
              'category': 'subject',
              'status': 'Live'
            },
            {
              'identifier': 'ncfcopy_subject_malayalam',
              'code': 'malayalam',
              'translations': null,
              'name': 'Malayalam',
              'description': '',
              'index': 22,
              'category': 'subject',
              'status': 'Live'
            }
          ],
          'translations': '{"hi":"विषय"}',
          'name': 'Subject',
          'description': '',
          'index': 4,
          'status': 'Live'
        },
      ],
      'type': 'K-12',
      'objectType': 'Framework'
    }
  }
};

// without user details
export const programDetailsWithOutUserDetails = {
  'config': {
    'onBoardingForm': {
      'action': 'onboard',
      'fields': [
        {
          'code': 'class',
          'dataType': 'text',
          'description': 'Class',
          'displayProperty': 'Editable',
          'index': 1,
          'inputType': 'select',
          'label': 'Class',
          'name': 'Class',
          'range': [
            {
              'category': 'class',
              'code': 'class1',
              'description': 'Class 1',
              'identifier': 'Class 1',
              'index': 1,
              'name': 'Class 1',
              'status': 'Live'
            },
            {
              'category': 'class',
              'code': 'class2',
              'description': 'Class 2',
              'identifier': 'Class 2',
              'index': 2,
              'name': 'Class 2',
              'status': 'Live'
            },
            {
              'category': 'class',
              'code': 'class3',
              'description': 'Class 3',
              'identifier': 'Class 3',
              'index': 3,
              'name': 'Class 3',
              'status': 'Live'
            }
          ],
          'required': false,
          'visible': true
        }
      ],
      'templateName': 'onBoardingForm'
    },
    'roles': [
      {
        'role': 'CONTRIBUTOR'
      },
      {
        'role': 'REVIEWER'
      }
    ],
    'scope': {
      'board': [
        'NCERT'
      ],
      'channel': 'b00bc992ef25f1a9a8d63291e20efc8d',
      'framework': 'NCFCOPY',
      'gradeLevel': [
        'Kindergarten',
        'Grade 1',
        'Grade 2',
        'Grade 3',
        'Grade 4'
      ],
      'medium': [
        'English'
      ],
      'subject': [
        'Hindi',
        'Mathematics',
        'English',
        'Telugu'
      ],
      'topics': [
        'Addition'
      ]
    }
  },
  'defaultRoles': [
    'CONTRIBUTOR'
  ],
  'description': 'hello program',
  'endDate': null,
  'name': 'CBSE',
  'programId': '6835f250-1fe1-11ea-93ea-2dffbaedca40',
  'slug': 'sunbird',
  'startDate': '2019-02-03T07:20:30.000Z',
  'status': null,
  'type': 'private'
};

export const programDetailsWithUserDetails = {
  'programId': '453b79e0-2d2f-11ea-a48e-338d4518b681',
  'config': {
    'framework': 'NCFCOPY',
    'roles': [
      {
        'id': 1,
        'name': 'CONTRIBUTOR',
        'default': true,
        'defaultTab': 1,
        'tabs': [
          1,
          2
        ]
      },
      {
        'id': 2,
        'name': 'REVIEWER',
        'defaultTab': 2,
        'tabs': [
          2
        ]
      }
    ],
    'header': {
      'id': 'ng.sunbird.header',
      'ver': '1.0',
      'compId': 'headerComp',
      'author': 'Venkat',
      'description': '',
      'publishedDate': '',
      'data': {},
      'config': {
        'tabs': [
          {
            'index': 1,
            'label': 'Contribute',
            'onClick': 'collectionComponent'
          },
          {
            'index': 2,
            'label': 'Review',
            'onClick': 'collectionComponent'
          },
          {
            'index': 3,
            'label': 'Dashboard',
            'onClick': 'dashboardComponent'
          }
        ]
      }
    },
    'onBoardingForm': {
      'templateName': 'onBoardingForm',
      'action': 'onboard',
      'fields': [
        {
          'code': 'school',
          'dataType': 'text',
          'name': 'School',
          'label': 'School',
          'description': 'School',
          'inputType': 'select',
          'required': false,
          'displayProperty': 'Editable',
          'visible': true,
          'range': [
            {
              'identifier': 'my_school',
              'code': 'my_school',
              'name': 'My School',
              'description': 'My School',
              'index': 1,
              'category': 'school',
              'status': 'Live'
            }
          ],
          'index': 1
        }
      ]
    },
    'sharedContext': [
      'channel',
      'framework',
      'board',
      'medium',
      'gradeLevel',
      'subject'
    ]
  },
  'defaultRoles': [
    'CONTRIBUTOR'
  ],
  'userDetails': {
    'programId': '453b79e0-2d2f-11ea-a48e-338d4518b681',
    'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e',
    'onBoarded': true,
    'onBoardingData': {
      'school': 'My School'
    },
    'roles': [
      'CONTRIBUTOR'
    ]
  }
};

export const programDetailsWithOutUserAndForm = {
  'config': {
    'roles': [
      {
        'role': 'CONTRIBUTOR'
      },
      {
        'role': 'REVIEWER'
      }
    ],
    'scope': {
      'board': [
        'NCERT'
      ],
      'channel': 'b00bc992ef25f1a9a8d63291e20efc8d',
      'framework': 'NCFCOPY',
      'gradeLevel': [
        'Kindergarten',
        'Grade 1',
        'Grade 2',
        'Grade 3',
        'Grade 4'
      ],
      'medium': [
        'English'
      ],
      'subject': [
        'Hindi',
        'Mathematics',
        'English',
        'Telugu'
      ],
      'topics': [
        'Addition'
      ]
    }
  },
  'defaultRoles': [
    'CONTRIBUTOR'
  ],
  'description': 'hello program',
  'endDate': null,
  'name': 'CBSE',
  'programId': '6835f250-1fe1-11ea-93ea-2dffbaedca40',
  'slug': 'sunbird',
  'startDate': '2019-02-03T07:20:30.000Z',
  'status': null,
  'type': 'private'
};

export const extFrameWorkPostData = {
  'id': 'api.add.participants',
  'responseCode': 'OK',
  'result': {
    'created': 'OK',
    'programId': '852203a0-329b-11ea-896e-e55dcdd2e76a'
  },
  'ts': '2020-01-09T04:50:45.171Z',
  'ver': '1.0'
};


export const userProfile = {
  'identifier': '874ed8a5-782e-4f6c-8f36-e0288455901e',
  'userName': 'ntptest102',
  'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e'
};
