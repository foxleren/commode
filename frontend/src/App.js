import WelcomePage from "./pages/WelcomePage/WelcomePage";
import DescriptionPage from "./pages/DescriptionPage/DescriptionPage";
import InteriorPage from "./pages/InteriorPage/InteriorPage";

export default function App() {
    return (
        <div className="App">
            <WelcomePage/>
            <DescriptionPage/>
            <InteriorPage/>
        </div>
    );
}
