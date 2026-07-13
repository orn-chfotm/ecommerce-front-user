---
description: "Next.js FSD 이커머스 사용자 프론트엔드에서 구현, 리뷰, 계획 작업을 할 때 사용합니다."
---

# Next.js FSD 사용자 프론트

## 이 스킬을 사용할 때

- 작업이 `src/app`, `src/pages`, `src/widgets`, `src/features`, `src/entities`, `src/shared` 아래 파일을 변경한다.
- 작업이 Next.js 라우팅, 레이아웃, 페이지 조합, 프론트엔드 아키텍처와 관련된다.
- 작업이 FSD 구조에서 코드 위치를 묻는다.

## 현재 프로젝트 사실

- 스택: React, Next.js, TypeScript.
- Next.js 버전: `16.2.4`.
- React 버전: `19.2.4`.
- TypeScript 모드: `strict`.
- Alias: `@/*`는 `src/*`에 매핑된다.
- FSD 루트: `src`.
- 라우팅 루트: `src/app`.

## 작업 흐름

1. 현재 FSD 레이어 매핑을 확인하기 위해 `README.md`를 읽는다.
2. 같은 FSD 레이어에서 가장 가까운 기존 구현을 확인한다.
3. 작업이 Next.js 동작을 건드리면 수정 전에 `node_modules/next/dist/docs/`의 관련 문서를 읽는다.
4. 해당 동작을 소유하는 가장 낮은 레이어를 선택한다.
5. 요청을 만족하는 가장 작은 코드 변경을 수행한다.
6. `npm run lint`를 실행한다.
7. 라우팅, 레이아웃, config, server/client 경계가 바뀌면 `npm run build`를 실행한다.

## 배치 가이드

- route 파일과 layout은 `src/app`에 둔다.
- 페이지 조합은 `src/pages`에 둔다.
- header, footer, 큰 재사용 페이지 블록은 `src/widgets`에 둔다.
- login, sign up, logout, cart actions, checkout steps 같은 사용자 액션은 `src/features`에 둔다.
- user, product, order, cart 같은 도메인 모델 타입 또는 모델 수준 UI는 `src/entities`에 둔다.
- API base client, shared utilities, shared config, 재사용 primitives는 `src/shared`에 둔다.

## 제약

- FSD 의존 방향을 유지한다.
- 상위 레이어를 하위 레이어로 import하지 않는다.
- 하나의 use case만으로 generic shared utility를 만들지 않는다.
- 사용자가 요청하지 않는 한 새 state library, request library, formatter, test framework를 도입하지 않는다.
- 기존 코드가 이 규칙을 위반하더라도 요청된 변경을 막지 않으면 고치지 않는다. 별도로 언급만 한다.
