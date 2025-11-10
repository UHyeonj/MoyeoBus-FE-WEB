import { ResponsiveLine } from '@nivo/line';
import { useState } from 'react';
import SubTitle from '../maintexts/SubTitle';

const LocalLine = () => {
  const data = [
    {
      id: 'japan',
      data: [
        { x: '05', y: 10 },
        { x: '06', y: 18 },
        { x: '07', y: 22 },
        { x: '08', y: 30 },
        { x: '09', y: 25 },
        { x: '10', y: 26 },
        { x: '11', y: 37 },
        { x: '12', y: 53 },
        { x: '13', y: 30 },
        { x: '14', y: 16 },
        { x: '15', y: 27 },
        { x: '16', y: 11 },
        { x: '17', y: 3 },
        { x: '18', y: 6 },
        { x: '19', y: 17 },
        { x: '20', y: 27 },
        { x: '21', y: 26 },
        { x: '22', y: 67 },
        { x: '23', y: 2 },
      ],
    },
  ];

  // 현재 날짜를 기본값으로 사용 (YYYY-MM-DD)
  const today = new Date();
  const pad = (n: number) => String(n).padStart(2, '0');
  const todayStr = `${today.getFullYear()}-${pad(today.getMonth() + 1)}-${pad(
    today.getDate()
  )}`;
  const [yearMonthDay, setYearMonthDay] = useState<string>(todayStr);

  const handleMonthChange = (newDate: string) => {
    setYearMonthDay(newDate);
    // TODO: 데이터를 서버에서 받아와야 하면 여기에서 호출하세요.
  };

  return (
    <div className="h-full flex flex-col items-start p-4">
      <section className="flex w-full justify-between">
        <SubTitle subTitle="시간대별 분석(명)" />
        <input
          type="date"
          value={yearMonthDay}
          onChange={e => handleMonthChange(e.target.value)}
          className="h-[5px] border border-gray-300 rounded-md p-2.5 text-grayscale"
        />
      </section>
      <div
        className="overflow-x-scroll w-full h-full"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        <div className="w-220 h-full">
          <ResponsiveLine
            data={data}
            margin={{ top: 30, right: 10, bottom: 50, left: 30 }}
            enableGridX={false}
            pointSize={10}
            colors={'#007CFF'}
            pointColor={'#007CFF'}
          />
        </div>
      </div>
    </div>
  );
};

export default LocalLine;
