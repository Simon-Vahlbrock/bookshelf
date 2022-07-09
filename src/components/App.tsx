import {FC, useMemo} from "react";

const App: FC = () => {
    return useMemo(() => (
        <div>Hallo</div>
    ), []);
}

App.displayName = 'App';

export default App;