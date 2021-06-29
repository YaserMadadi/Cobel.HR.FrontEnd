import { INavData } from '@coreui/angular';

export class MenuItem {


  constructor() {

  }

  public static GetNavItems(userName: string) {
    if (userName.toLowerCase().indexOf('y.madadi') > -1)
      MenuItem.AdminMenu();
    else
      MenuItem.UserMenu();

    return MenuItem.NavItems;
  }

  private static NavItems: INavData[] = [];

  private static AdminMenu() {
    MenuItem.NavItems = [
      {
        name: 'Dashboard',
        url: '/Base/...',
        icon: 'icon-speedometer',
        badge: {
          variant: 'info',
          text: 'NEW'
        }
      },
      {
        title: true,
        name: 'Personel'
      },
      {
        name: 'Colors',
        url: '/theme/colors',
        icon: 'icon-drop'
      },
      {
        name: 'Typography',
        url: '/theme/typography',
        icon: 'icon-pencil'
      },
      {
        title: true,
        name: 'Components'
      },
      {
        name: 'Base',
        url: '/base',
        icon: 'icon-puzzle',
        children: [
          {
            name: 'Cards',
            url: '/base/cards',
            icon: 'icon-puzzle'
          },
          {
            name: 'Carousels',
            url: '/base/carousels',
            icon: 'icon-puzzle'
          },
          {
            name: 'Collapses',
            url: '/base/collapses',
            icon: 'icon-puzzle'
          },
          {
            name: 'Forms',
            url: '/base/forms',
            icon: 'icon-puzzle'
          },
          {
            name: 'Navbars',
            url: '/base/navbars',
            icon: 'icon-puzzle'

          },
          {
            name: 'Pagination',
            url: '/base/paginations',
            icon: 'icon-puzzle'
          },
          {
            name: 'Popovers',
            url: '/base/popovers',
            icon: 'icon-puzzle'
          },
          {
            name: 'Progress',
            url: '/base/progress',
            icon: 'icon-puzzle'
          },
          {
            name: 'Switches',
            url: '/base/switches',
            icon: 'icon-puzzle'
          },
          {
            name: 'Tables',
            url: '/base/tables',
            icon: 'icon-puzzle'
          },
          {
            name: 'Tabs',
            url: '/base/tabs',
            icon: 'icon-puzzle'
          },
          {
            name: 'Tooltips',
            url: '/base/tooltips',
            icon: 'icon-puzzle'
          }
        ]
      },
      {
        name: 'Buttons',
        url: '/buttons',
        icon: 'icon-cursor',
        children: [
          {
            name: 'Buttons',
            url: '/buttons/buttons',
            icon: 'icon-cursor'
          },
          {
            name: 'Dropdowns',
            url: '/buttons/dropdowns',
            icon: 'icon-cursor'
          },
          {
            name: 'Brand Buttons',
            url: '/buttons/brand-buttons',
            icon: 'icon-cursor'
          }
        ]
      },
      {
        name: 'Charts',
        url: '/charts',
        icon: 'icon-pie-chart'
      },
      {
        name: 'Icons',
        url: '/icons',
        icon: 'icon-star',
        children: [
          {
            name: 'CoreUI Icons',
            url: '/icons/coreui-icons',
            icon: 'icon-star',
            badge: {
              variant: 'success',
              text: 'NEW'
            }
          },
          {
            name: 'Flags',
            url: '/icons/flags',
            icon: 'icon-star'
          },
          {
            name: 'Font Awesome',
            url: '/icons/font-awesome',
            icon: 'icon-star',
            badge: {
              variant: 'secondary',
              text: '4.7'
            }
          },
          {
            name: 'Simple Line Icons',
            url: '/icons/simple-line-icons',
            icon: 'icon-star'
          }
        ]
      },
      {
        name: 'Notifications',
        url: '/notifications',
        icon: 'icon-bell',
        children: [
          {
            name: 'Alerts',
            url: '/notifications/alerts',
            icon: 'icon-bell'
          },
          {
            name: 'Badges',
            url: '/notifications/badges',
            icon: 'icon-bell'
          },
          {
            name: 'Modals',
            url: '/notifications/modals',
            icon: 'icon-bell'
          }
        ]
      },
      {
        name: 'Widgets',
        url: '/widgets',
        icon: 'icon-calculator',
        badge: {
          variant: 'info',
          text: 'NEW'
        }
      },
      {
        divider: true
      },
      {
        title: true,
        name: 'Extras',
      },
      {
        name: 'Pages',
        url: '/pages',
        icon: 'icon-star',
        children: [
          {
            name: 'Login',
            url: '/login',
            icon: 'icon-star'
          },
          {
            name: 'Register',
            url: '/register',
            icon: 'icon-star'
          },
          {
            name: 'Error 404',
            url: '/404',
            icon: 'icon-star'
          },
          {
            name: 'Error 500',
            url: '/500',
            icon: 'icon-star'
          }
        ]
      },
      {
        name: 'Disabled',
        url: '/dashboard',
        icon: 'icon-ban',
        badge: {
          variant: 'secondary',
          text: 'NEW'
        },
        attributes: { disabled: true }
      }
    ];
  }

  private static UserMenu() {
    let t : INavData[] = [];


    

    MenuItem.NavItems = [
      
      {
        name:'PMS',
        children:[
          {
            name: 'Appraise',
            url: '/PMS/TargetSetting',  
            icon: 'icon-speedometer',
          },
          {
            name:'Configuration',
            title: true
          },
          {
            name: 'Config Target Setting',
            url: '/PMS/ConfigTargetSetting',  
            icon: 'icon-speedometer',
          },
          {
            name: 'Competency Item',
            url: '/PMS/CompetencyItem',  
            icon: 'icon-speedometer',
          },
        ]
      },
      {
        name:'HR Core',
        icon:'',
        children:[
          {
            name: 'Department',
            url: '/HR/Department',
            icon: 'icon-speedometer',
          },
          {
            name: 'Level',
            url: '/HR/Level',
            icon: 'icon-speedometer',
           
          },
          {
            name: 'Organization Chart ( Positions )',
            url: '/HR/Position',
            icon: 'icon-speedometer',
          },
          {
            name: 'Unit',
            url: '/HR/Unit',
            icon: 'icon-speedometer',
          },
          {
            name: 'Person',
            url: '/HR/Person',
            icon: 'icon-speedometer',
          },
          {
            name: 'Employee',
            url: '/HR/Employee',
            icon: 'icon-speedometer',
          },
        ]
    },
     
      
      //  {
      //   name: 'Employee',
      //   url: '/HR/Employee',
      //   icon: 'icon-speedometer',
      // }, {
      //   title: true,
      //   name: 'Questionnaire Section'
      // }, {
      //   name: 'Personal Questionnaire',
      //   url: '/Partial',
      //   icon: 'fa-solid fa-user-tag',
      //   children: [
      //     {
      //       name: 'CoachingQuestionnaire',
      //       url: '/Partial/CoachingQuestionnaire',
      //       icon: 'icon-list'
      //     }]
      // },
      // {
      //   title: true,
      //   name: 'Main Section'
      // },
      // {
      //   name: 'HR ...',
      //   url: '/HRR',
      //   icon: 'icon-drop',
      //   children: [
      //     {
      //       name: 'Person',
      //       url: '/HR/Person',
      //       icon: 'icon-notebook'
      //     },
      //     {
      //       name: 'Position',
      //       url: '/HR/Position',
      //       icon: 'icon-puzzle'
      //     },
      //     {
      //       name: 'Key Position',
      //       url: '/HR/KeyPosition',
      //       icon: 'icon-puzzle'
      //     },
      //     {
      //       name: 'Person Position',
      //       url: '/HR/PersonPosition',
      //       icon: 'icon-puzzle'
      //     },
      //     {
      //       name: 'Person Key Position',
      //       url: '/HR/PersonKeyPosition',
      //       icon: 'icon-puzzle'
      //     }]
      // },
      // {
      //   name: 'L & D ...',
      //   url: 'OLAD',
      //   icon: 'icon-drop',
      //   children: [{
      //     name: 'Coaching',
      //     url: '/LAD/Coaching',
      //     icon: 'icon-puzzle'
      //   },
      //   {
      //     name: 'Training',
      //     url: '/IDEA/Training',
      //     icon: 'icon-puzzle'
      //   },
      //   {
      //     name: 'Assessment',
      //     url: '/LAD/Assessment',
      //     icon: 'icon-puzzle'
      //   },
      //   {
      //     name: 'Questionnaire',
      //     url: '/LAD/CoachingQuestionnaire',
      //     icon: 'icon-list'
      //   },

      //   {
      //     name: 'Promotion Assessment',
      //     url: '/LAD/PromotionAssessment',
      //     icon: 'icon-puzzle'
      //   },
      //   {
      //     name: 'Assessment Coaching',
      //     url: '/LAD/AssessmentCoaching',
      //     icon: 'icon-puzzle'
      //   },
      //   {
      //     name: 'Development Goals',
      //     url: '/LAD/DevelopmentGoal',
      //     icon: 'icon-puzzle'
      //   },
      //   {
      //     name: 'Conclusion',
      //     url: '/LAD/Conclusion',
      //     icon: 'icon-puzzle'
      //   },]
      // }, {
      //   name: 'PMS ...',
      //   url: '/PMS',
      //   icon: 'icon-drop',
      //   children: [{
      //     name: 'Appraisal Result',
      //     url: '/PMS/AppraisalResult',
      //     icon: 'icon-puzzle'
      //   },
      //   {
      //     name: 'Critical Incident',
      //     url: '/PMS/CriticalIncident',
      //     icon: 'icon-puzzle'
      //   }]
      // },
      // {
      //   title: true,
      //   name: 'Basic Information'
      // },
      // {
      //   name: 'Questionnaire',
      //   url: '/LADQ',
      //   icon: 'icon-drop',
      //   children: [{
      //     name: 'Questionnaire Type',
      //     url: '/LAD/QuestionnaireType',
      //     icon: 'icon-list'
      //   },{
      //     name: 'Answer Type',
      //     url: '/LAD/AnswerType',
      //     icon: 'icon-list'

      //   }]
      // },
      // {
      //   name: 'Assessments...',
      //   url: '/Assess',
      //   icon: 'icon-drop',
      //   children: [{
      //     name: 'Competency Items',
      //     url: '/LAD/CompetencyItem',
      //     icon: 'icon-list'
      //   }, {
      //     name: 'Assessment Types',
      //     url: '/LAD/AssessmentType',
      //     icon: 'icon-list'
      //   }, {
      //     name: 'Coach',
      //     url: '/LAD/Coach',
      //     icon: 'icon-puzzle'
      //   }, {
      //     name: 'Assessor',
      //     url: '/LAD/Assessor',
      //     icon: 'icon-list'
      //   }]
      // },
      // {
      //   name: 'HumanResource ...',
      //   url: '/HumanResource',
      //   icon: 'icon-drop',
      //   children: [{
      //     name: 'Departmentes',
      //     url: '/HR/Department',
      //     icon: 'icon-list'
      //   }]
      // },
      // {
      //   name: 'Basic Info ...',
      //   url: '/BI',
      //   icon: 'icon-drop',
      //   children: [{
      //     name: 'Year Quarters',
      //     url: '/Base/YearQuarter',
      //     icon: 'icon-list'
      //   },
      //   {
      //     name: 'Connection Types',
      //     url: '/Base/ConnectionType',
      //     icon: 'icon-list'
      //   },

      //   ]
      // },
      // {
      //   title: true,
      //   name: 'Security Section'
      // },
      // {
      //   name: 'Security',
      //   url: '/Core',
      //   icon: 'icon-drop',
      //   children: [
      //     {
      //       name: 'User Account',
      //       url: '/Core/UserAccount',
      //       icon: 'icon-list'
      //     }, {
      //       name: 'Role Permission',
      //       url: '/Core/RolePermission',
      //       icon: 'icon-list'
      //     },
      //     {
      //       name: 'Person Role',
      //       url: '/Core/PersonRole',
      //       icon: 'icon-list'
      //     },
      //     {
      //       name: 'Roles',
      //       url: '/Core/Role',
      //       icon: 'icon-list'
      //     },
      //     {
      //       name: 'Keys ( Forms )',
      //       url: '/Core/Key',
      //       icon: 'icon-list'
      //     },
      //   ]
      // }

    ];
  }

  public navItems: INavData[] = [


  ];

}

