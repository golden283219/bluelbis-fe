import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Home from "./Common/Home/Home";
import TermsConditions from "./Common/TermsConditions/TermsConditions";
import PrivacyPolicy from "./Common/PrivacyPolicy/PrivacyPolicy";
import CancellationPolicy from "./Common/CancellationPolicy/CancellationPolicy";
import ReviewPolicy from "./Common/ReviewPolicy/ReviewPolicy";
import CookiesPolicy from "./Common/CookiesPolicy/CookiesPolicy";
import About from "./Common/About/About";
import CustomerDashboard from "./Customer/CustomerDashboard/CustomerDashboard";
import CustomerUserProfile from "./Customer/CustomerUserProfile/CustomerUserProfile";
import CustomerBillingDetails from "./Customer/CustomerBillingDetails/CustomerBillingDetails";
import CustomerFavouriteProviders from "./Customer/CustomerFavouriteProviders/CustomerFavouriteProviders";
import CustomerNotifications from "./Customer/CustomerNotifications/CustomerNotifications";
import CustomerChangePassword from "./Customer/CustomerChangePassword/CustomerChangePassword";
import CustomerTransactions from "./Customer/CustomerTransactions/CustomerTransactions";
import CustomerReferral from "./Customer/CustomerReferral/CustomerReferral";
import ProviderServiceDetail from "./Provider/ProviderServiceDetail/ProviderServiceDetail";
import ProviderBusinessDetail from "./Provider/ProviderBusinessDetail/ProviderBusinessDetail";
import ProviderLocation from "./Provider/ProviderLocation/ProviderLocation";
import ProviderVerifiedBadge from "./Provider/ProviderVerifiedBadge/ProviderVerifiedBadge";


import ProviderMedia from "./Provider/ProviderMedia/ProviderMedia";
import ProviderFirstStepMessage from "./Provider/ProviderFirstStepMessage/ProviderFirstStepMessage";
import ProviderRequestReviews from "./Provider/ProviderRequestReviews/ProviderRequestReviews";
import ProviderBillingDetails from "./Provider/ProviderBillingDetails/ProviderBillingDetails";
import ProviderChangePassword from "./Provider/ProviderChangePassword/ProviderChangePassword";
import ProviderBusinessProfile from "./Provider/ProviderBusinessProfile/ProviderBusinessProfile";
import ContactUs from "./Common/ContactUs/ContactUs";
import Unauthorized from "./Common/UnauthorizedPage";
import ProviderFaq from "./Provider/ProviderFaq/ProviderFaq";
import ProviderMaintenance from "./Provider/ProviderMaintenance/ProviderMaintenance";
import ProviderFreeAccount from "./Provider/ProviderFreeAccount/ProviderFreeAccount";
import ProviderCompanyPractice from "./Provider/ProviderCompanyPractice/ProviderCompanyPractice";
import Login from "./Customer/Login/Login";
import Forget from "./Customer/Forget/Forget";
import CustomerServiceDropdown from "./Customer/CustomerServiceDropdown/CustomerServiceDropdown";
import ProviderMembership from "./Provider/ProviderMembership/ProviderMembership";
import BroadcastedRequests from "./Provider/BroadcastedRequests/BroadcastedRequests";
import ProviderListMyServices from "./Provider/ProviderListMyServices/ProviderListMyServices";
import ProviderTransactions from "./Provider/ProviderTransactions/ProviderTransactions";
import ProviderNotifications from "./Provider/ProviderNotifications/ProviderNotifications";
import ProviderReferral from "./Provider/ProviderReferral/ProviderReferral";
import ProviderEditProfile from "./Provider/ProviderEditProfile/ProviderEditProfile";
import ProviderTaskDetail from "./Provider/ProviderTaskDetail/ProviderTaskDetail";
import ActiveTaskDetail from "./Customer/CustomerTaskDetail/ActiveTaskDetail";
import AssignedTaskDetail from "./Customer/CustomerTaskDetail/AssignedTaskDetail";
import PastTaskDetail from "./Customer/CustomerTaskDetail/PastTaskDetail";
import CustomerBroadcastedTask from "./Customer/CustomerBroadcastedTask/CustomerBroadcastedTask";
import CustomerProfilePreview from "./Customer/CustomerProfilePreview/CustomerProfilePreview";
import TaskDetails from "./Customer/Tasks/TaskDetails";
import TaskDescription from "./Customer/Tasks/TasksDescription";
import TasksLocation from "./Customer/Tasks/TasksLocation";
import Budget from "./Customer/Tasks/Budget";
import TasksDateTime from "./Customer/Tasks/TasksDateTime";
import ProCentre from "./Provider/ProCentre/ProCentre";
import HowitWorks from "./Provider/HowitWorks/HowitWorks";
import HowtoCreateProject from "./Provider/HowtoCreateProject/HowtoCreateProject";
import CareerOpportunities from "./Provider/CareerOpportunities/CareerOpportunities";
import Blog from "./Provider/Blog/Blog";
import ViewBlog from "./Provider/Blog/ViewBlog";
import BecomeaProvider from "./Provider/BecomeaProvider/BecomeaProvider";
import ProviderProfilePreview from "./Provider/ProviderProfilePreview/ProviderProfilePreview";
import CustomerChat from "./Customer/CustomerChat/CustomerChat";


const Pages = {
  HomePage: Home,
  HeaderComponent: Header,
  FooterComponent: Footer,
  LoginPage: Login,
  ForgetPage: Forget,
  TermsConditionsPage: TermsConditions,
  PrivacyPolicyPage: PrivacyPolicy,
  CancellationPolicyPage: CancellationPolicy,
  ReviewPolicyPage: ReviewPolicy,
  CookiesPolicyPage:CookiesPolicy,
  AboutPage:About,

  CustomerDashboardPage:CustomerDashboard,
  CustomerUserProfilePage:CustomerUserProfile,
  CustomerBillingDetailsPage:CustomerBillingDetails,
  CustomerFavouriteProvidersPage:CustomerFavouriteProviders,
  CustomerNotificationsPage:CustomerNotifications,
  CustomerChangePasswordPage:CustomerChangePassword,
  CustomerTransactionsPage:CustomerTransactions,
  CustomerReferralPage:CustomerReferral,
  CustomerServiceDropdown:CustomerServiceDropdown,

  ProviderServiceDetailPage:ProviderServiceDetail,
  ProviderBusinessDetailPage:ProviderBusinessDetail,
  ProviderLocationPage:ProviderLocation,
  ProviderVerifiedBadgePage:ProviderVerifiedBadge,
  ProviderFirstStepMessagePage:ProviderFirstStepMessage,
  ProviderRequestReviewsPage:ProviderRequestReviews,
  ProviderMediaPage:ProviderMedia,

  ProviderBillingDetailsPage:ProviderBillingDetails,
  ProviderListMyServicesPage:ProviderListMyServices,
  ProviderTransactionsPage:ProviderTransactions,
  ProviderNotificationsPage:ProviderNotifications,
  ProviderReferralPage:ProviderReferral,
  ProviderChangePasswordPage:ProviderChangePassword,
  ProviderBusinessProfilePage:ProviderBusinessProfile,
  ProviderEditProfilePage:ProviderEditProfile,
  BroadcastedRequestsPage:BroadcastedRequests,
  ContactUsPage:ContactUs,
  UnauthorizedPage:Unauthorized,
  ProviderFaqPage:ProviderFaq,
  ProviderMaintenancePage:ProviderMaintenance,
  ProviderFreeAccountPage:ProviderFreeAccount,
  ProviderCompanyPracticePage:ProviderCompanyPractice,


  ProviderMembershipPage:ProviderMembership,
  CustomerBroadcastedTaskPage:CustomerBroadcastedTask,
  ProviderTaskDetailPage:ProviderTaskDetail,
  ActiveTaskDetailPage:ActiveTaskDetail,
  AssignedTaskDetailPage:AssignedTaskDetail,
  PastTaskDetailPage:PastTaskDetail,
  CustomerProfilePreviewPage:CustomerProfilePreview,
  TaskDetailsPage:TaskDetails,
  TaskDescriptionPage:TaskDescription,
  TasksLocationPage:TasksLocation,
  BudgetPage:Budget,
  TasksDateTimePage:TasksDateTime,
  ProCentrePage:ProCentre,
  HowitWorksPage:HowitWorks,
  HowtoCreateProjectPage:HowtoCreateProject,
  CareerOpportunitiesPage:CareerOpportunities,
  BlogPage:Blog,
  ViewBlogPage:ViewBlog,
  BecomeaProviderPage:BecomeaProvider,
  ProviderProfilePreviewrPage:ProviderProfilePreview,
  CustomerChatPage:CustomerChat,
  
};
export default Pages;