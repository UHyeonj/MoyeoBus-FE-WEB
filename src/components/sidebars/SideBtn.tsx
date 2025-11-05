import { useNavigate } from 'react-router-dom';
import { useAtom } from 'jotai';
import {
  activeLocalSidebarAtom,
  activeCompanySidebarAtom,
  userRoleAtom,
} from '../../atoms/sideBarAtoms';

interface SideBtnProps {
  btnName: string;
  clickTo: string;
  img: string;
}

const SideBtn = ({ btnName, clickTo, img }: SideBtnProps) => {
  //전역 상태값
  const [userRole] = useAtom(userRoleAtom);
  const [activeLocal, setActiveLocal] = useAtom(activeLocalSidebarAtom);
  const [activeCompany, setActiveCompany] = useAtom(activeCompanySidebarAtom);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(clickTo);
    if (userRole === 'local') {
      setActiveLocal(btnName);
    } else if (userRole === 'company') {
      setActiveCompany(btnName);
    }
  };

  const isActive =
    (userRole === 'local' && activeLocal === btnName) ||
    (userRole === 'company' && activeCompany === btnName);

  return (
    <button
      className={`w-44 h-12 leading-7 text-lg font-medium flex items-center justify-start gap-3 px-5.5 rounded-[10px] hover:cursor-pointer ${isActive ? 'bg-black text-white' : ''}`}
      onClick={handleClick}
    >
      <img
        className="w-3.5 h-3.5"
        src={img}
        alt="사이드바 아이콘"
        style={isActive ? { filter: 'invert(1)' } : {}}
      />
      {btnName}
    </button>
  );
};

export default SideBtn;
