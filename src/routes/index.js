import Home from '~/pages/Home';
import SignIn from '~/pages/Login/SignIn';
import SignUp from '~/pages/Login/SignUp';
import Introduce from '~/pages/Introduce';
import News from '~/pages/News';
import PostNew from '~/pages/PostNew';
import { HeaderOnly } from '~/components/Layout';
import WordSchool from '~/pages/WordSchool';
import Details from '~/pages/Details';

// public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/introduce', component: Introduce },
    { path: '/news', component: News },
    { path: '/postNew', component: PostNew },
    { path: '/wordSchool', component: WordSchool },
    // { path: '/search', component: Search, layout: null },
    { path: '/login', component: SignIn, layout: HeaderOnly },
    { path: '/register', component: SignUp, layout: HeaderOnly },
    { path: '/details', component: Details },
];
const privateRouter = [];

export { publicRoutes, privateRouter };
