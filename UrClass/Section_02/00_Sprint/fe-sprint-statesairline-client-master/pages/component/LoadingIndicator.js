function LoadingIndicator() {
  return (
    <img
      className="loading-indicator"
      alt="now loading..."
      // ? 경로 변경
      src="../../public/loading.gif"
      style={{ margin: '1rem' }}
    />
  );
}

export default LoadingIndicator;
