const deleteSearchHistory = async () => {
  try {
    const response = await fetch(`http://43.202.227.20:8080/search-history`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // 성공적으로 삭제된 경우 true 반환
    return true;
  } catch (error) {
    console.error('Error deleteSearchHistory', error);
    // 에러 발생 시 false 반환
    return false;
  }
};

export default deleteSearchHistory;
