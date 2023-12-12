function CopyMe(text) {
  navigator.clipboard.writeText(text)
    .then(() => {
      console.log(`Copied to clipboard: ${text}`);
      alert(`Copied to clipboard: ${text}`);
    })
    .catch((error) => {
      console.error(`Could not copy email address: ${error}`);
    });
}