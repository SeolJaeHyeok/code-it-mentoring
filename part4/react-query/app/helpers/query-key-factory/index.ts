// react query key를 관리하는 factory 함수
export const todosKeys = {
  all: ['todos'] as const,
  lists: () => [...todosKeys.all] as const,
  list: (filters: any) => [...todosKeys.lists(), { filters }] as const,
};
