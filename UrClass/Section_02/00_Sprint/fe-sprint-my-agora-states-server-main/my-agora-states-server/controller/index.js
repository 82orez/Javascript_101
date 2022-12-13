const { agoraStatesDiscussions } = require('../repository/discussions');
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    // ? 아래 줄 삭제하고 새로 성성
    // ? res.send('TODO:')
    res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion 을 응답합니다.
    const { id } = req.params;
    let filteredList;

    if (id) {
      filteredList = discussionsData.find((value) => {
        return value.id === Number(id);
      });

      // ? id 가 일치하는 것이 있으면 조건문 실행.
      if (filteredList) {
        return res.status(200).json(filteredList);
      } else {
        return res.status(404).json('No matching ID!!!');
      }
    }

    // ? 아래 줄 삭제.
    // res.send('TODO:');
  },
};


module.exports = {
  discussionsController,
};
