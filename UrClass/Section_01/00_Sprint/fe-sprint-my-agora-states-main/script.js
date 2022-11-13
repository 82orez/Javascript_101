// index.html 을 열어서 agoraStatesDiscussions 배열 요소를 확인하세요.
console.log(agoraStatesDiscussions);

// convertToDiscussion 은 아고라 스테이츠 데이터를 DOM 으로 바꿔줍니다.
const convertToDiscussion = (obj) => {
  const li = document.createElement("li"); // li 요소 생성
  li.className = "discussion__container"; // 클래스 이름 지정

  const avatarWrapper = document.createElement("div");
  avatarWrapper.className = "discussion__avatar--wrapper";
  const discussionContent = document.createElement("div");
  discussionContent.className = "discussion__content";
  const discussionAnswered = document.createElement("div");
  discussionAnswered.className = "discussion__answered";

  // TODO: 객체 하나에 담긴 정보를 DOM 에 적절히 넣어주세요.
  // avatarWrapper
  const imageInformation = document.createElement('img');
  imageInformation.className = 'discussion__avatar--image';
  imageInformation.setAttribute('src', `${obj.avatarUrl}`);
  imageInformation.setAttribute('alt', `avatar of ${obj.author}`);

  avatarWrapper.append(imageInformation);

  // discussionContent
  const  title = document.createElement('h3');
  title.className = 'discussion__title';

  if (obj.answer !== null) {
    const aLink = document.createElement('a');
    aLink.setAttribute('href',`${obj.answer.url}`);
    aLink.textContent = obj.title;
    title.append(aLink);
  } else {
    title.textContent = obj.title;
  }

  const disInfo = document.createElement('div');
  disInfo.className = 'discussion__information';
  disInfo.textContent = `${obj.author} / ${obj.createdAt}`;

  discussionContent.append(title, disInfo);

  // discussionAnswered
  const checkAnswered = document.createElement('p');
  if (obj.answer !== null) {
    checkAnswered.textContent = '☑';
    discussionAnswered.append(checkAnswered);
  }


  li.append(avatarWrapper, discussionContent, discussionAnswered);
  return li;
};

// agoraStatesDiscussions 배열의 모든 데이터를 화면에 렌더링하는 함수입니다.
const render = (element) => {
  for (let i = 0; i < agoraStatesDiscussions.length; i += 1) {
    element.append(convertToDiscussion(agoraStatesDiscussions[i]));
  }
  return;
};

// ul 요소에 agoraStatesDiscussions 배열의 모든 데이터를 화면에 렌더링합니다.
const ul = document.querySelector("ul.discussions__container");
render(ul);
