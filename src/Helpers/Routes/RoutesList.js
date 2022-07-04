import Pages from "../../Views";

const GetRoute = ({ isprivate: isPrivate, page: Page, ...rest }) => {
  if (isPrivate) {
    return <>
    <Pages.HeaderComponent/>
    <div className="pageWrapper">
    <Page {...rest} />
    </div>
   
    <Pages.FooterComponent/>
    </>;
  } else {
    return <>
    <Pages.HeaderComponent/>
    <div className="pageWrapper">
    <Page {...rest} />
    </div>
    <Pages.FooterComponent footer={rest.footer || false}/>
    </>;
  }

};

let RouterList = [
  {
    element: (
      <GetRoute isprivate={false} role="Default" page={Pages.HomePage} />
    ),
    path: "/",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute isprivate={false} role="Default" page={Pages.LoginPage} />
    ),
    path: "/login",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute isprivate={false} role="Default" page={Pages.ForgetPage}/>
    ),
    path: "/forget",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute isprivate={false} role="Default" page={Pages.TermsConditionsPage} footer={1}/>
    ),
    path: "/terms-conditions",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute isprivate={false} role="Default" page={Pages.PrivacyPolicyPage}/>
    ),
    path: "/privacy-policy",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute isprivate={false} role="Default" page={Pages.CancellationPolicyPage} />
    ),
    path: "/cancellation-policy",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute isprivate={false} role="Default" page={Pages.ReviewPolicyPage} />
    ),
    path: "/review-policy",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute isprivate={false} role="Default" page={Pages.CookiesPolicyPage} />
    ),
    path: "/cookies-policy",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute isprivate={false} role="Default" page={Pages.AboutPage} />
    ),
    path: "/about",
    isAdmin: false,
  },

  // Customer Routing 
  {
    element: (
      <GetRoute isprivate={false} role="Default" page={Pages.CustomerDashboardPage} />
    ),
    path: "/customer/dashboard",
    isAdmin: false,
  },
 
  // Customer Account Routing 
  {
    element: (
      <GetRoute isprivate={false} role="Default" page={Pages.CustomerUserProfilePage} />
    ),
    path: "/customer/profile/userprofile",
    isAdmin: false,
  }, 
  {
    element: (
      <GetRoute isprivate={false} role="Default" page={Pages.CustomerBillingDetailsPage} />
    ),
    path: "/customer/profile/billing",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute isprivate={false} role="Default" page={Pages.CustomerFavouriteProvidersPage} />
    ),
    path: "/customer/profile/favourite",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute isprivate={false} role="Default" page={Pages.CustomerNotificationsPage} />
    ),
    path: "/customer/profile/notifications",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute isprivate={false} role="Default" page={Pages.CustomerChangePasswordPage} />
    ),
    path: "/customer/profile/changepassword",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute isprivate={false} role="Default" page={Pages.CustomerTransactionsPage} />
    ),
    path: "/customer/profile/transactions",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute isprivate={false} role="Default" page={Pages.CustomerReferralPage} />
    ),
    path: "/customer/profile/referral",
    isAdmin: false,
  },
  
  // Provider Routing 
  {
    element: (
      <GetRoute isprivate={false} role="Default" page={Pages.ProviderBusinessDetailPage}/>
    ),
    path: "/provider/business-detail",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute isprivate={false} role="Default" page={Pages.ProviderServiceDetailPage} />
    ),
    path: "/provider/service-detail",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute isprivate={false} role="Default" page={Pages.ProviderLocationPage} />
    ),
    path: "/provider/provider-location",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute isprivate={false} role="Default" page={Pages.ProviderVerifiedBadgePage} />
    ),
    path: "/provider/verified-badge",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute isprivate={false} role="Default" page={Pages.ProviderFirstStepMessagePage} />
    ),
    path: "/provider/first-step-message",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute isprivate={false} role="Default" page={Pages.ProviderRequestReviewsPage} />
    ),
    path: "/provider/request-reviews",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute isprivate={false} role="Default" page={Pages.ProviderMediaPage} />
    ),
    path: "/provider/media",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute isprivate={false} role="Default" page={Pages.ProviderBillingDetailsPage} />
    ),
    path: "/provider/profile/billing-details",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute isprivate={false} role="Default" page={Pages.ProviderTransactionsPage} />
    ),
    path: "/provider/profile/transactions",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute isprivate={false} role="Default" page={Pages.ProviderNotificationsPage} />
    ),
    path: "/provider/profile/notifications",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute isprivate={false} role="Default" page={Pages.ProviderReferralPage} />
    ),
    path: "/provider/profile/referral",
    isAdmin: false,
  },
  
  {
    element: (
      <GetRoute isprivate={false} role="Default" page={Pages.ProviderListMyServicesPage} />
    ),
    path: "/provider/profile/list-my-services",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute isprivate={false} role="Default" page={Pages.ProviderChangePasswordPage} />
    ),
    path: "/provider/profile/change-password",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute isprivate={false} role="Default" page={Pages.ProviderEditProfilePage} />
    ),
    path: "/provider/profile/edit-profile",
    isAdmin: false,
  },
  
  {
    element: (
      <GetRoute isprivate={false} role="Default" page={Pages.ProviderBusinessProfilePage} />
    ),
    path: "/provider/profile/busniess-profile",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute isprivate={false} role="Default" page={Pages.BroadcastedRequestsPage} />
    ),
    path: "/provider/broadcasted-requested",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute isprivate={false} role="Default" page={Pages.ContactUsPage} />
    ),
    path: "/contactus",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute isprivate={false} role="Default" page={Pages.UnauthorizedPage} />
    ),
    path: "/unauthorized-page",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute isprivate={false} role="Default" page={Pages.ProviderFaqPage} />
    ),
    path: "/provider/faq-page",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute isprivate={false} role="Default" page={Pages.ProviderMaintenancePage} />
    ),
    path: "/provider/maintenance-page",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute isprivate={false} role="Default" page={Pages.ProviderFreeAccountPage} />
    ),
    path: "/provider/free-account-page",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute isprivate={false} role="Default" page={Pages.ProviderCompanyPracticePage} />
    ),
    path: "/provider/practice-company-or-an-individual",
    isAdmin: false,
  },


  // 04-02-2022
  {
    element: (
      <GetRoute isprivate={false} role="Default" page={Pages.CustomerServiceDropdown} />
    ),
    path: "/customer-service-dropdown",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute isprivate={false} role="Default" page={Pages.ProviderMembershipPage} />
    ),
    path: "/provider/membership",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute isprivate={false} role="Default" page={Pages.CustomerBroadcastedTaskPage} />
    ),
    path: "/customer/broadcasted-task",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute isprivate={false} role="Default" page={Pages.ProviderTaskDetailPage} />
    ),
    path: "/provider/task-detail-page",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute isprivate={false} role="Default" page={Pages.ActiveTaskDetailPage} />
    ),
    path: "/customer/active/task-detail-page",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute isprivate={false} role="Default" page={Pages.AssignedTaskDetailPage} />
    ),
    path: "/customer/assigned/task-detail-page",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute isprivate={false} role="Default" page={Pages.PastTaskDetailPage} />
    ),
    path: "/customer/past/task-detail-page",
    isAdmin: false,
  },


  {
    element: (
      <GetRoute isprivate={false} role="Default" page={Pages.CustomerProfilePreviewPage} />
    ),
    path: "/customer/profile/preview",
    isAdmin: false,
  },
  
  {
    element: (
      <GetRoute isprivate={false} role="Default" page={Pages.TaskDetailsPage} />
    ),
    path: "/customer/tasks/task-details",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute isprivate={false} role="Default" page={Pages.TaskDescriptionPage} />
    ),
    path: "/customer/tasks/task-description",
    isAdmin: false,
  },
  {
    element: <GetRoute isprivate={false} role="Default" page={Pages.TasksLocationPage} />,
    path: "/customer/tasks/task-location",
    isAdmin: false,
    showHeaderFooder: false,
  },
  {
    element: <GetRoute isprivate={false} role="Default" page={Pages.BudgetPage} />,
    path: "/customer/tasks/budget",
    isAdmin: false,
    showHeaderFooder: false,
  },
  {
    element: <GetRoute isprivate={false} role="Default" page={Pages.TasksDateTimePage} />,
    path: "/customer/tasks/task-date-time",
    isAdmin: false,
    showHeaderFooder: false,
  },

  // 09-02-2022
  {
    element: <GetRoute isprivate={false} role="Default" page={Pages.ProCentrePage} />,
    path: "/provider/pro-centre",
    isAdmin: false,
    showHeaderFooder: false,
  },
  {
    element: <GetRoute isprivate={false} role="Default" page={Pages.HowitWorksPage} />,
    path: "/provider/how-it-works",
    isAdmin: false,
    showHeaderFooder: false,
  },
  {
    element: <GetRoute isprivate={false} role="Default" page={Pages.HowtoCreateProjectPage} />,
    path: "/provider/how-to-create-project",
    isAdmin: false,
    showHeaderFooder: false,
  },
  {
    element: <GetRoute isprivate={false} role="Default" page={Pages.CareerOpportunitiesPage} />,
    path: "/provider/career-opportunities",
    isAdmin: false,
    showHeaderFooder: false,
  },
  {
    element: <GetRoute isprivate={false} role="Default" page={Pages.BlogPage} />,
    path: "/provider/blog",
    isAdmin: false,
    showHeaderFooder: false,
  },
  {
    element: <GetRoute isprivate={false} role="Default" page={Pages.ViewBlogPage} />,
    path: "/provider/view-blog",
    isAdmin: false,
    showHeaderFooder: false,
  },
  {
    element: <GetRoute isprivate={false} role="Default" page={Pages.BecomeaProviderPage} />,
    path: "/provider/become-a-provider",
    isAdmin: false,
    showHeaderFooder: false,
  },
  {
    element: <GetRoute isprivate={false} role="Default" page={Pages.ProviderProfilePreviewrPage} />,
    path: "/provider/profile/preview",
    isAdmin: false,
    showHeaderFooder: false,
  },
  {
    element: <GetRoute isprivate={false} role="Default" page={Pages.CustomerChatPage} />,
    path: "/customer/chat",
    isAdmin: false,
    showHeaderFooder: false,
  },
  
];


export default RouterList;