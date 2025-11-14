import MiniTextContainer from '../components/containers/MiniTextContainer';
import MiniTextsLayOut from '../layouts/MiniTextsLayOut';
import PathInfo from './PathInfo';
import StaticMap from './StaticMap';

const OperatorPathFind = () => {
  const inputData = {
    nextStop: '방화마을회관',
    expectedArrival: 7,
    currentSpeed: 45,
  };

  //status에 지남 현재 추가
  const stop: {
    id: number;
    name: string;
    time: string;
    status: '출발' | '예정' | '종점' | '지남' | '현재';
    latlng: { lat: number; lng: number };
  }[] = [
    {
      id: 1,
      name: '송풍저수지',
      time: '14:05',
      status: '출발',
      latlng: { lat: 33.450705, lng: 126.570677 },
    },
    {
      id: 2,
      name: '방화마을회관',
      time: '14:13',
      status: '지남',
      latlng: { lat: 33.450936, lng: 126.569477 },
    },
    {
      id: 3,
      name: '새마을회관',
      time: '14:18',
      status: '지남',
      latlng: { lat: 33.450879, lng: 126.56994 },
    },
    {
      id: 4,
      name: '송풍초등학교',
      time: '14:25',
      status: '현재',
      latlng: { lat: 33.451393, lng: 126.570738 },
    },
    {
      id: 5,
      name: '송풍리',
      time: '14:30',
      status: '예정',
      latlng: { lat: 33.452344169439975, lng: 126.56878163224233 },
    },
    {
      id: 6,
      name: '송풍삼거리',
      time: '14:35',
      status: '예정',
      latlng: { lat: 33.452739313807456, lng: 126.5709308145358 },
    },
    {
      id: 7,
      name: '송풍약수터',
      time: '14:40',
      status: '종점',
      latlng: { lat: 33.45178067090639, lng: 126.572688693875 },
    },
  ];

  const positions = stop.map(s => ({
    title: s.name,
    latlng: s.latlng,
  }));

  return (
    <div className="w-full h-full flex flex-col gap-3 min-h-0">
      <MiniTextsLayOut>
        <MiniTextContainer name="다음 정류장" value={inputData.nextStop} />
        <MiniTextContainer
          name="다음 정류장까지 (예상)"
          value={inputData.expectedArrival + ' 분'}
        />
        <MiniTextContainer
          name="남은 거리"
          value={inputData.currentSpeed + ' km'}
        />
      </MiniTextsLayOut>
      <div className="flex-1 min-h-0 flex gap-6">
        <PathInfo line="106번" driver="배상명" stops={stop} />
        <StaticMap data={positions} />
      </div>
    </div>
  );
};

export default OperatorPathFind;
