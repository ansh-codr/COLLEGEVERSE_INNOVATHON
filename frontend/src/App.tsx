import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider, RequireAuth } from "@/lib/auth";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import LoginStudent from "./pages/LoginStudent";
import LoginCollege from "./pages/LoginCollege";
import LoginRecruiter from "./pages/LoginRecruiter";
import Colleges from "./pages/Colleges";
import CollegeDetail from "./pages/CollegeDetail";
import LeaderboardPage from "./pages/LeaderboardPage";
import MicroGigsPublic from "./pages/MicroGigsPublic";
import MarketplacePublic from "./pages/MarketplacePublic";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Explore from "./pages/Explore";
import StudentDashboard from "./pages/student/StudentDashboard";
import StudentProfile from "./pages/student/StudentProfile";
import StudentWallet from "./pages/student/StudentWallet";
import StudentMicroGigs from "./pages/student/StudentMicroGigs";
import StudentMarketplace from "./pages/student/StudentMarketplace";
import StudentEvents from "./pages/student/StudentEvents";
import StudentPlacements from "./pages/student/StudentPlacements";
import StudentCommunities from "./pages/student/StudentCommunities";
import StudentChat from "./pages/student/StudentChat";
import StudentClubs from "./pages/student/StudentClubs";
import StudentLeaderboard from "./pages/student/StudentLeaderboard";
import StudentCompetitions from "./pages/student/StudentCompetitions";
import CollegeDashboard from "./pages/college/CollegeDashboard";
import CollegeVerification from "./pages/college/CollegeVerification";
import CollegeNotices from "./pages/college/CollegeNotices";
import CollegeEvents from "./pages/college/CollegeEvents";
import CollegeAnalytics from "./pages/college/CollegeAnalytics";
import CollegeCommunities from "./pages/college/CollegeCommunities";
import CollegeRecruiters from "./pages/college/CollegeRecruiters";
import CollegeClubApprovals from "./pages/college/CollegeClubApprovals";
import CollegeMarketplaceMod from "./pages/college/CollegeMarketplaceMod";
import RecruiterDashboard from "./pages/recruiter/RecruiterDashboard";
import RecruiterSearch from "./pages/recruiter/RecruiterSearch";
import RecruiterShortlist from "./pages/recruiter/RecruiterShortlist";
import RecruiterTests from "./pages/recruiter/RecruiterTests";
import RecruiterMicroGigs from "./pages/recruiter/RecruiterMicroGigs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/colleges" element={<Colleges />} />
            <Route path="/colleges/:id" element={<CollegeDetail />} />
            <Route path="/leaderboard" element={<LeaderboardPage />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/microgigs" element={<MicroGigsPublic />} />
            <Route path="/marketplace" element={<MarketplacePublic />} />
            <Route path="/login" element={<Login />} />
            <Route path="/login/student" element={<LoginStudent />} />
            <Route path="/login/college" element={<LoginCollege />} />
            <Route path="/login/recruiter" element={<LoginRecruiter />} />
            <Route path="/student/dashboard" element={<RequireAuth role="student"><StudentDashboard /></RequireAuth>} />
            <Route path="/student/profile" element={<RequireAuth role="student"><StudentProfile /></RequireAuth>} />
            <Route path="/student/wallet" element={<RequireAuth role="student"><StudentWallet /></RequireAuth>} />
            <Route path="/student/microgigs" element={<RequireAuth role="student"><StudentMicroGigs /></RequireAuth>} />
            <Route path="/student/marketplace" element={<RequireAuth role="student"><StudentMarketplace /></RequireAuth>} />
            <Route path="/student/events" element={<RequireAuth role="student"><StudentEvents /></RequireAuth>} />
            <Route path="/student/placements" element={<RequireAuth role="student"><StudentPlacements /></RequireAuth>} />
            <Route path="/student/communities" element={<RequireAuth role="student"><StudentCommunities /></RequireAuth>} />
            <Route path="/student/chat" element={<RequireAuth role="student"><StudentChat /></RequireAuth>} />
            <Route path="/student/clubs" element={<RequireAuth role="student"><StudentClubs /></RequireAuth>} />
            <Route path="/student/leaderboard" element={<RequireAuth role="student"><StudentLeaderboard /></RequireAuth>} />
            <Route path="/student/competitions" element={<RequireAuth role="student"><StudentCompetitions /></RequireAuth>} />
            <Route path="/college/dashboard" element={<RequireAuth role="faculty"><CollegeDashboard /></RequireAuth>} />
            <Route path="/college/verification" element={<RequireAuth role="faculty"><CollegeVerification /></RequireAuth>} />
            <Route path="/college/notices" element={<RequireAuth role="faculty"><CollegeNotices /></RequireAuth>} />
            <Route path="/college/events" element={<RequireAuth role="faculty"><CollegeEvents /></RequireAuth>} />
            <Route path="/college/analytics" element={<RequireAuth role="faculty"><CollegeAnalytics /></RequireAuth>} />
            <Route path="/college/communities" element={<RequireAuth role="faculty"><CollegeCommunities /></RequireAuth>} />
            <Route path="/college/recruiters" element={<RequireAuth role="faculty"><CollegeRecruiters /></RequireAuth>} />
            <Route path="/college/clubs-approvals" element={<RequireAuth role="faculty"><CollegeClubApprovals /></RequireAuth>} />
            <Route path="/college/marketplace-moderation" element={<RequireAuth role="faculty"><CollegeMarketplaceMod /></RequireAuth>} />
            <Route path="/recruiter/dashboard" element={<RequireAuth role="recruiter"><RecruiterDashboard /></RequireAuth>} />
            <Route path="/recruiter/search" element={<RequireAuth role="recruiter"><RecruiterSearch /></RequireAuth>} />
            <Route path="/recruiter/shortlist" element={<RequireAuth role="recruiter"><RecruiterShortlist /></RequireAuth>} />
            <Route path="/recruiter/tests" element={<RequireAuth role="recruiter"><RecruiterTests /></RequireAuth>} />
            <Route path="/recruiter/microgigs" element={<RequireAuth role="recruiter"><RecruiterMicroGigs /></RequireAuth>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
