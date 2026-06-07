function handleCredentialResponse(response) {
  console.log("Google credential response:", response);
  alert("Logged in with Google!\nCheck the browser console for the returned token.");
}

window.onload = function() {
  google.accounts.id.initialize({
    client_id: "953663588824-rf70q8gefocahjgp3lj58mr7mtifnc1b.apps.googleusercontent.com",
    callback: handleCredentialResponse
  });

  google.accounts.id.renderButton(
    document.getElementById("googleSignIn"),
    { theme: "outline", size: "medium", width: 130 }
  );
};
