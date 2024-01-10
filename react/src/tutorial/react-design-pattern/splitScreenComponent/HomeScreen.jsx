import React from "react";
import SplitScreen from "./SplitScreenLayout";

const LeftComponent = () => {
	return <h2>left</h2>;
};
const RightComponent = () => {
	return <h2>Right</h2>;
};

function HomeScreen() {
	return <SplitScreen left={LeftComponent} right={RightComponent} />;
}

export default HomeScreen;
