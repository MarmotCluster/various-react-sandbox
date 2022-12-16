import { Router } from "../types/RouterTypes";
import Main from "../pages/Main";
import PageUseMemo from "../pages/PageUseMemo";
import OnKeydownFocus from "../pages/OnKeydownFocus";
import PageUseCallback from "../pages/PageUseCallback";
import PageImageSlide from "../pages/PageImageSlide";
import SVGopoy from "../components/SVGopoy";
import DirectMemo from "../pages/DirectMemo";
import GlobalVars from "../pages/GlobalVars";

const router: Router[] = [
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/usememo",
    element: <PageUseMemo />,
  },
  {
    path: "/focus",
    element: <OnKeydownFocus />,
  },
  {
    path: "/usecallback",
    element: <PageUseCallback />,
  },
  {
    path: "/imageslide",
    element: <PageImageSlide />,
  },
  {
    path: "/opoy",
    element: <SVGopoy />,
  },
  {
    path: "/direct",
    element: <DirectMemo />,
  },
  {
    path: "/recoil",
    element: <GlobalVars />,
    name: "리코일",
  },
];

export default router;
