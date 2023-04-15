// * 프린터
// * 문제
// * 김코딩은 최근 인쇄할 일이 많이 생겨 창고에서 안 쓰던 프린터를 꺼냈습니다. 이 프린터의 성능을 테스트하여 새로운 프린터를 장만할지 결정하려고 합니다.
// * 김코딩은 프린터의 인쇄 작업 목록의 크기와 최대 용량을 가정하고 각기 다른 용량의 문서를 차례대로 인쇄하여 모든 문서가 인쇄되는데 최소 몇 초가 걸리는지 테스트하기로 했습니다.
// * 프린터 인쇄 작업 목록의 제한사항은 다음과 같습니다.

// * [제한사항]
// 인쇄 작업 목록은 칸으로 이루어져 있습니다.
//   각 칸에는 한 개의 문서만 위치할 수 있습니다.
//   문서는 1초에 한 칸만 이동할 수 있습니다.
//   인쇄 작업 목록의 크기는 bufferSize 이고 최대 용량 capacities 만큼 문서를 담을 수 있습니다.
//   만약, 인쇄 작업 목록의 크기가 2이고 최대 용량이 10Kib 라면 크기가 [7, 4, 5, 6] Kib 인 문서들이 최단 시간 안에 순서대로 모두 인쇄되는 과정은 다음과 같습니다.
//
// 1초가 지나면 인쇄 작업 목록에는 7Kib 크기의 문서가 추가됩니다.
//
// 2초일 때 인쇄 작업 목록의 최대 용량이 10Kib 이기 때문에 4Kib 문서는 작업 목록에 들어갈 수 없습니다. 동시에 7Kib 문서는 작업 목록에서 1칸 앞으로 이동합니다.
//
// 3초일 때 7Kib 문서는 인쇄 작업 목록에서 나와 프린터가 인쇄합니다. 동시에 4Kib 문서는 인쇄 작업 목록에 추가됩니다.
//
// 4초일 때 4Kib 문서는 인쇄 작업 목록에서 1칸 앞으로 이동합니다. 동시에 5Kib 문서는 인쇄 작업 목록에 추가됩니다.
//
// 5초일 때 4Kib 문서는 인쇄 작업 목록에서 나와 프린터가 인쇄합니다. 동시에 5Kib 문서는 인쇄 작업 목록에서 1칸 앞으로 이동합니다. 최대 용량 10Kib 제한으로 6Kib 문서는 인쇄 작업 목록으로 추가될 수 없습니다.
//
// 6초일 때 5Kib 문서는 인쇄 작업 목록에서 나와 프린터가 인쇄합니다. 동시에 6Kib 문서가 인쇄 작업 목록에 추가됩니다.
//
// 7초일 때 6Kib 문서는 인쇄 작업 목록에서 1칸 앞으로 이동합니다.
//
// 8초일 때 6Kib 문서가 마지막으로 인쇄됩니다.
//
// 위 예시에서와 같이 모든 문서가 출력되는데 걸리는 최소 시간은 8초가 걸립니다.
//
// 김코딩이 가지고 있는 프린터의 제한사항인 인쇄 작업 목록의 크기 bufferSize, 최대 용량 capacities 가 주어집니다. 인쇄할 문서의 크기가 나열된 배열 documents 가 모두 인쇄되는데 걸리는 최소 시간을 반환하는 솔루션을 만들어 주세요.

function queuePrinter(bufferSize, capacities, documents) {
  let count = 0;
  let queue = [];
  let totalBufferVolume = 0;

  // * queue 에 bufferSize 만큼 0을 삽입합니다. (queue 에 들어갈 요소의 고정 갯수를 만들어 주는 과정입니다.)
  for(let i = 0; i < bufferSize; i++){
    queue.push(0);
  }

  // * ~56번째 줄까지의 코드는 프린터를 처음 실행했을 때를 다룹니다.
  // * documents 배열에서 제일 앞의 있는 요소를 하나 빼내 currentDocument 에 할당합니다.
  let currentDocument = documents.shift();

  // * queue 의 제일 앞에 currentDocument 를 삽입하고, 제일 마지막 요소를 없앱니다.
  queue.unshift(currentDocument);
  queue.pop();

  // * totalBufferVolume(총 용량)에 currentDocument 의 크기를 합칩니다.
  totalBufferVolume = totalBufferVolume + currentDocument;

  // * 1 초가 지났다는 것을 count 를 증가하며 나타냅니다.
  count++;

  // * totalBufferVolume(총 용량)가 0이 될 때까지 반복합니다.
  while(totalBufferVolume){

    // * totalBufferVolume(총 용량)에 queue 에 있는 마지막 요소의 용량을 제거합니다.
    totalBufferVolume = totalBufferVolume - queue.pop();

    // * documents 배열에서 제일 앞의 있는 요소를 하나 빼내 currentDocument 에 할당합니다.
    currentDocument = documents.shift();

    // * 만약 현재 문서와 총 용량을 더했을 때, 최대 용량(capacities)보다 작거나 같다면
    if(currentDocument + totalBufferVolume <= capacities){

      // * queue 에 currentDocument 를 삽입하고 totalBufferVolume(총 용량)에 currentDocument 용량을 추가합니다.
      queue.unshift(currentDocument);
      totalBufferVolume = totalBufferVolume + currentDocument;

      // * 만약 현재 문서와 총 용량을 더했을 때, 최대 용량(capacities)보다 크다면
    } else {
      // * 다시 documents 에 currentDocument 를 집어넣고 queue 에는 0을 삽입합니다.
      documents.unshift(currentDocument);
      queue.unshift(0);
    }

    // * 한 번 반복할 때마다 count(초)를 올립니다.
    count++;
  }

  // * count 를 반환합니다.
  return count;
}