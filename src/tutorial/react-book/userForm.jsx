function UserForm() {
const [userData, setUserData] = useState({
email: '',
password: ''
});
function emailEnteredHandler(event) {
setUserData(prevData => ({
email: event.target.value,
password: prevData.password
}));
};
function passwordEnteredHandler(event) {
setUserData(prevData => ({
email: prevData.email,
password: event.target.value}));
};
// ... code omitted, because the returned JSX code is the same as before
// userData is not actively used here, hence you could get a warning
// regarding that. Simply ignore it or start using userData
// (e.g., via console.log(userData))
};
