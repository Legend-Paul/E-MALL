export default function toggleSignInUser(users, currentUser) {
    const updatedUsers = users.map((user) => {
        return user.email === currentUser?.email
            ? { ...user, ["isSignedIn"]: !user.isSignedIn }
            : user;
    });
    localStorage.setItem("users", JSON.stringify(updatedUsers));
}
