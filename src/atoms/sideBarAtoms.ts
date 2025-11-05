import { atom } from 'jotai';

// 지자체, 운수사를 구분하기 위한 atom
export const userRoleAtom = atom<'local' | 'company' | null>('local');

export const activeLocalSidebarAtom = atom<string>('이용객 현황');

export const activeCompanySidebarAtom = atom<string>('데이터 분석');
