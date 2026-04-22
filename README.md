### ecommerce-app-fromt 

## User Front

---
### 주요 프로젝트 환경
* react
* next.js
* typescript

---
### 디렉토리 구조 (FSD 구조 활용)
| Layer    | Path          | Role                                                                 | Depends On                                                                      |
|----------|--------------|----------------------------------------------------------------------|---------------------------------------------------------------------------------|
| App      | `src/app`    | Next.js 라우팅, 레이아웃, 전역 설정, 엔트리 포인트                  | Pages, Widgets, Features, Entities, Shared   <br /> (실 사용 제한 범위는 Pages, Shared) |
| Pages    | `src/pages`  | 페이지 단위 화면 조합 (widgets, features, entities 조합)            | Widgets, Features, Entities, Shared                                             |
| Widgets  | `src/widgets`| 페이지를 구성하는 큰 UI 블록                                        | Features, Entities, Shared                                                      |
| Features | `src/features`| 사용자 액션/유스케이스 단위 기능 (버튼, 폼, 상호작용)               | Entities, Shared                                                                |
| Entities | `src/entities`| 도메인 모델 중심 UI/로직 (타입, 조회, 표현)                         | Shared                                                                          |
| Shared   | `src/shared` | 공통 자원 (UI, API client, utils, config 등)                         | -                                                                               |