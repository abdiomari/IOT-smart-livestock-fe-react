import AuthenticationRoutes from "./AuthenticationRoutes";


export default function ThemeRoutes() {
    return useRoutes([MainRoutes, AuthenticationRoutes])
}