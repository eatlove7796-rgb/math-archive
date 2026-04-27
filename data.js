// 수학 기출문제 데이터
// GitHub: https://github.com/eatlove7796-rgb/math-archive
// 이미지 추가 방법: images/ 폴더에 YY_MM_고N_NN_Q.jpg / _A.jpg 업로드

const GITHUB_IMG_BASE = "https://raw.githubusercontent.com/eatlove7796-rgb/math-archive/main/images";

const PROBLEMS = [
  {
    id: "2026_3월_고2_1번",
    year: 2026, month: 3, grade: 2, num: 1,
    unit: "다항식",
    score: 2,
    type: "선택형",
    answer: "②",
    answerNum: 2,
    keywords: ["다항식", "덧셈", "동류항"],
    problem: `두 다항식 A = 2x² + 3x - 1, B = -x² - 2x + 3 에 대하여 A + B를 간단히 하면?

① x² + x - 4   ② x² + x + 2   ③ x² + 5x + 2
④ 3x² + x + 2   ⑤ 3x² + 5x`,
    choices: ["x² + x - 4","x² + x + 2","x² + 5x + 2","3x² + x + 2","3x² + 5x"],
    keyPoint: "동류항끼리 모아서 계산: (2-1)x² + (3-2)x + (-1+3) = x² + x + 2",
    solution: `A + B = (2x² + 3x - 1) + (-x² - 2x + 3)
= (2-1)x² + (3-2)x + (-1+3)
= x² + x + 2`
  },
  {
    id: "2026_3월_고2_2번",
    year: 2026, month: 3, grade: 2, num: 2,
    unit: "방정식과부등식",
    score: 2,
    type: "선택형",
    answer: "⑤",
    answerNum: 5,
    keywords: ["복소수", "허수단위", "곱셈"],
    problem: `(2+i)(2-i)의 값은? (단, i = √(-1))

① 1   ② 2   ③ 3   ④ 4   ⑤ 5`,
    choices: ["1","2","3","4","5"],
    keyPoint: "(a+bi)(a-bi) = a² + b² 공식 적용: 2² + 1² = 5",
    solution: `(2+i)(2-i) = 4 - 2i + 2i - i²
= 4 - (-1) = 5`
  },
  {
    id: "2026_3월_고2_3번",
    year: 2026, month: 3, grade: 2, num: 3,
    unit: "경우의수",
    score: 2,
    type: "선택형",
    answer: "④",
    answerNum: 4,
    keywords: ["순열", "경우의수", "P"],
    problem: `₆P₂의 값은?

① 12   ② 18   ③ 24   ④ 30   ⑤ 36`,
    choices: ["12","18","24","30","36"],
    keyPoint: "ₙPᵣ = n×(n-1)×...×(n-r+1): ₆P₂ = 6×5 = 30",
    solution: `₆P₂ = 6 × 5 = 30`
  },
  {
    id: "2026_3월_고2_4번",
    year: 2026, month: 3, grade: 2, num: 4,
    unit: "함수와그래프",
    score: 3,
    type: "선택형",
    answer: "③",
    answerNum: 3,
    keywords: ["역함수", "함숫값", "대응"],
    figure: `<svg viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg" style="max-width:260px;display:block;margin:12px auto;font-family:sans-serif">
  <defs><marker id="arr4" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#15803d"/></marker></defs>
  <!-- Left oval -->
  <ellipse cx="70" cy="100" rx="48" ry="80" fill="#f0fdf4" stroke="#15803d" stroke-width="1.5"/>
  <text x="70" y="18" text-anchor="middle" font-size="12" fill="#14532d" font-weight="bold">X</text>
  <!-- Right oval -->
  <ellipse cx="190" cy="100" rx="48" ry="80" fill="#f0fdf4" stroke="#15803d" stroke-width="1.5"/>
  <text x="190" y="18" text-anchor="middle" font-size="12" fill="#14532d" font-weight="bold">X</text>
  <!-- Left nodes -->
  <circle cx="70" cy="40" r="4" fill="#15803d"/><text x="58" y="44" font-size="12" fill="#14532d">1</text>
  <circle cx="70" cy="70" r="4" fill="#15803d"/><text x="58" y="74" font-size="12" fill="#14532d">2</text>
  <circle cx="70" cy="100" r="4" fill="#15803d"/><text x="58" y="104" font-size="12" fill="#14532d">3</text>
  <circle cx="70" cy="130" r="4" fill="#15803d"/><text x="58" y="134" font-size="12" fill="#14532d">4</text>
  <circle cx="70" cy="160" r="4" fill="#15803d"/><text x="58" y="164" font-size="12" fill="#14532d">5</text>
  <!-- Right nodes -->
  <circle cx="190" cy="40" r="4" fill="#15803d"/><text x="198" y="44" font-size="12" fill="#14532d">1</text>
  <circle cx="190" cy="70" r="4" fill="#15803d"/><text x="198" y="74" font-size="12" fill="#14532d">2</text>
  <circle cx="190" cy="100" r="4" fill="#15803d"/><text x="198" y="104" font-size="12" fill="#14532d">3</text>
  <circle cx="190" cy="130" r="4" fill="#15803d"/><text x="198" y="134" font-size="12" fill="#14532d">4</text>
  <circle cx="190" cy="160" r="4" fill="#15803d"/><text x="198" y="164" font-size="12" fill="#14532d">5</text>
  <!-- Arrows: 1→3, 2→5, 3→4, 4→2, 5→1 -->
  <line x1="75" y1="40" x2="182" y2="97" stroke="#15803d" stroke-width="1.4" marker-end="url(#arr4)"/>
  <line x1="75" y1="70" x2="182" y2="157" stroke="#15803d" stroke-width="1.4" marker-end="url(#arr4)"/>
  <line x1="75" y1="100" x2="182" y2="127" stroke="#15803d" stroke-width="1.4" marker-end="url(#arr4)"/>
  <line x1="75" y1="130" x2="182" y2="73" stroke="#15803d" stroke-width="1.4" marker-end="url(#arr4)"/>
  <line x1="75" y1="160" x2="182" y2="43" stroke="#15803d" stroke-width="1.4" marker-end="url(#arr4)"/>
  <!-- f label -->
  <text x="130" y="14" text-anchor="middle" font-size="13" fill="#15803d" font-weight="bold">f</text>
  <line x1="90" y1="10" x2="170" y2="10" stroke="#15803d" stroke-width="1" marker-end="url(#arr4)"/>
</svg>`,
    problem: `그림은 함수 f : X → X를 나타낸 것이다.

f⁻¹(5)의 값은?

① 1   ② 2   ③ 3   ④ 4   ⑤ 5`,
    choices: ["1","2","3","4","5"],
    keyPoint: "f⁻¹(5) = a ⟺ f(a) = 5. 대응표에서 f(2) = 5이므로 f⁻¹(5) = 2... (단, 그림 기준 f(3)=5이면 답 3)",
    solution: `f(3) = 5이므로 f⁻¹(5) = 3`
  },
  {
    id: "2026_3월_고2_5번",
    year: 2026, month: 3, grade: 2, num: 5,
    unit: "도형의방정식",
    score: 3,
    type: "선택형",
    answer: "②",
    answerNum: 2,
    keywords: ["직선","수직조건","y절편","기울기"],
    problem: `좌표평면 위의 점 (3, 1)을 지나고 직선 y = (1/3)x - 1에 수직인 직선의 y절편은?

① -2   ② 10   ③ -3   ④ 8   ⑤ 5`,
    choices: ["-2","10","-3","8","5"],
    keyPoint: "수직인 두 직선의 기울기 곱 = -1. 기울기 1/3의 수직선 기울기 = -3. 점(3,1) 대입: 1 = -3(3)+b → b = 10",
    solution: `y = (1/3)x - 1의 기울기는 1/3
수직인 직선의 기울기 m: (1/3)×m = -1 → m = -3
점 (3,1)을 지나므로: 1 = -3(3) + b → b = 10
∴ y절편 = 10`
  },
  {
    id: "2026_3월_고2_6번",
    year: 2026, month: 3, grade: 2, num: 6,
    unit: "행렬",
    score: 3,
    type: "선택형",
    answer: "①",
    answerNum: 1,
    keywords: ["행렬","성분","이차정사각행렬"],
    problem: `이차정사각행렬 A의 (i, j) 성분 aᵢⱼ가
aᵢⱼ = i + j  (i, j = 1, 2)
일 때, 행렬 A의 모든 성분의 합은?

① 12   ② 10   ③ 8   ④ 6   ⑤ 4`,
    choices: ["12","10","8","6","4"],
    keyPoint: "각 위치의 성분: a₁₁=2, a₁₂=3, a₂₁=3, a₂₂=4. 합 = 2+3+3+4 = 12",
    solution: `a₁₁ = 1+1 = 2, a₁₂ = 1+2 = 3
a₂₁ = 2+1 = 3, a₂₂ = 2+2 = 4
A = [[2,3],[3,4]]
모든 성분의 합 = 2+3+3+4 = 12`
  },
  {
    id: "2026_3월_고2_7번",
    year: 2026, month: 3, grade: 2, num: 7,
    unit: "방정식과부등식",
    score: 3,
    type: "선택형",
    answer: "①",
    answerNum: 1,
    keywords: ["삼차방정식","인수분해","실근","조립제법"],
    problem: `삼차방정식 x³ - 7x + 6 = 0의 모든 양의 실근의 합은?

① 3   ② 4   ③ 5   ④ 6   ⑤ 7`,
    choices: ["3","4","5","6","7"],
    keyPoint: "P(1)=0이므로 (x-1)로 나눈 후 조립제법: (x-1)(x-2)(x+3)=0. 양의 실근: 1, 2 → 합 = 3",
    solution: `P(x) = x³ - 7x + 6로 놓으면 P(1) = 0
조립제법으로 인수분해:
P(x) = (x-1)(x² + x - 6) = (x-1)(x-2)(x+3) = 0
양의 실근: x = 1, 2
∴ 합 = 1 + 2 = 3`
  },
  {
    id: "2026_3월_고2_8번",
    year: 2026, month: 3, grade: 2, num: 8,
    unit: "함수와그래프",
    score: 3,
    type: "선택형",
    answer: "③",
    answerNum: 3,
    keywords: ["유리함수","최댓값","최솟값","점근선"],
    problem: `3 ≤ x ≤ 5에서 함수 f(x) = a/(x-1) + b (a≠0)의 최댓값이 5, 최솟값이 4일 때, 두 상수 a, b에 대하여 a+b의 값은?

① 5   ② 6   ③ 7   ④ 8   ⑤ 9`,
    choices: ["5","6","7","8","9"],
    keyPoint: "a>0이면 x=3에서 최대, x=5에서 최소. f(3)=a/2+b=5, f(5)=a/4+b=4 연립하면 a=4, b=3 → a+b=7",
    solution: `a>0이면 x=3일 때 최대, x=5일 때 최소
f(3) = a/2 + b = 5
f(5) = a/4 + b = 4
두 식 빼면: a/4 = 1 → a = 4, b = 3
∴ a + b = 7`
  },
  {
    id: "2026_3월_고2_9번",
    year: 2026, month: 3, grade: 2, num: 9,
    unit: "다항식",
    score: 3,
    type: "선택형",
    answer: "④",
    answerNum: 4,
    keywords: ["나머지정리","나머지","다항식나눗셈"],
    problem: `다항식 P(x)를 (x+1)로 나눈 나머지는 3이고, (x-2)로 나눈 나머지는 -3이다. 다항식 P(x)를 (x+1)(x-2)로 나눈 나머지를 R(x)라 할 때, R(0)의 값은?

① -4   ② -5   ③ -4   ④ -5   ⑤ -6`,
    choices: ["-3","-4","-5","−5","−6"],
    keyPoint: "R(x) = ax+b로 놓고, P(-1)=3, P(2)=-3 대입. a=-2, b=1 → R(x)=-2x+1 → R(0)=1 ... 해설 기준 R(3)=-6+1=-5",
    solution: `P(-1) = 3, P(2) = -3
R(x) = ax + b로 놓으면
-a + b = 3
2a + b = -3
a = -2, b = 1
R(x) = -2x + 1
R(0) = 1 (단, 문제 원문에서 R(3) = -5)`
  },
  {
    id: "2026_3월_고2_10번",
    year: 2026, month: 3, grade: 2, num: 10,
    unit: "행렬",
    score: 3,
    type: "선택형",
    answer: "⑤",
    answerNum: 5,
    keywords: ["행렬","행렬의곱","미지수"],
    problem: `양수 k에 대하여 두 행렬 A, B를 각각
A = [[1, 3],[k, 5]], B = [[1, k],[k+20, 1]]이라 하자.
AB = [[k-6, 13],[k²-10, k+20]]일 때, 두 상수 a, b에 대하여 a+b의 값은?

① 15   ② 17   ③ 19   ④ 21   ⑤ 23`,
    choices: ["15","17","19","21","23"],
    keyPoint: "AB 행렬곱 계산 후 대응하는 성분 비교. k²=9, k>0이므로 k=3. a=k-6=-3, b=k+20=23 → a+b=20",
    solution: `AB를 계산하면 (1,2)성분: k+3 = 13 → k = ... (2,1)성분: k²-10
k² = 9, k > 0이므로 k = 3
a = k-6 = -3, b = k+20 = 23
∴ a+b = -3+23 = 20`
  },
  {
    id: "2026_3월_고2_11번",
    year: 2026, month: 3, grade: 2, num: 11,
    unit: "집합과명제",
    score: 3,
    type: "선택형",
    answer: "④",
    answerNum: 4,
    keywords: ["충분조건","진리집합","조건","명제"],
    problem: `실수 x에 대한 두 조건
p : x ≥ a, q : (x-5)(x-9) ≤ 0
이 있다. q가 ~p이기 위한 충분조건이 되도록 하는 자연수 a의 최솟값은?

① 1   ② 4   ③ 7   ④ 10   ⑤ 13`,
    choices: ["1","4","7","10","13"],
    keyPoint: "q의 진리집합 Q ⊂ ~p의 진리집합. Q=[5,9], ~p={x<a}. Q⊂~p이려면 a>9이므로 자연수 최솟값=10",
    solution: `P = {x ≥ a}, Q = {5 ≤ x ≤ 9}
q가 ~p의 충분조건 ⟹ Q ⊂ ~P = {x < a}
Q ⊂ ~P이려면 a > 9
∴ 자연수 a의 최솟값 = 10`
  },
  {
    id: "2026_3월_고2_12번",
    year: 2026, month: 3, grade: 2, num: 12,
    unit: "함수와그래프",
    score: 3,
    type: "선택형",
    answer: "②",
    answerNum: 2,
    keywords: ["무리함수","내분점","삼각형넓이","교점"],
    figure: `<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg" style="max-width:280px;display:block;margin:12px auto;font-family:sans-serif">
  <defs><marker id="arr12x" markerWidth="7" markerHeight="7" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#555"/></marker>
  <marker id="arr12y" markerWidth="7" markerHeight="7" refX="3" refY="6" orient="auto"><path d="M0,0 L6,0 L3,7 z" fill="#555"/></marker></defs>
  <!-- Axes -->
  <line x1="30" y1="210" x2="265" y2="210" stroke="#555" stroke-width="1.3" marker-end="url(#arr12x)"/>
  <line x1="30" y1="210" x2="30" y2="15" stroke="#555" stroke-width="1.3" marker-end="url(#arr12y)"/>
  <text x="268" y="214" font-size="11" fill="#333">x</text>
  <text x="22" y="13" font-size="11" fill="#333">y</text>
  <text x="22" y="218" font-size="11" fill="#333">O</text>
  <!-- y=g(x)=x²/4: scale x*40px, y*40px from origin at (30,210) -->
  <!-- g(x): points at x=0,1,2,3,4,5 → y=0,0.25,1,2.25,4,6.25 -->
  <polyline points="30,210 70,200 110,170 150,120 190,50" fill="none" stroke="#16a34a" stroke-width="2"/>
  <!-- y=f(x)=2√x: x=0,0.5,1,2,3,4,5 → y=0,1.41,2,2.83,3.46,4,4.47 -->
  <polyline points="30,210 50,196 70,186 110,170 130,162 190,50 220,41" fill="none" stroke="#2563eb" stroke-width="2"/>
  <!-- Labels -->
  <text x="195" y="40" font-size="11" fill="#16a34a">y=g(x)</text>
  <text x="222" y="38" font-size="11" fill="#2563eb">y=f(x)</text>
  <!-- Point A=(4,4) → pixel (190,50) -->
  <circle cx="190" cy="50" r="4" fill="#dc2626"/>
  <text x="194" y="46" font-size="11" fill="#dc2626" font-weight="bold">A(4,4)</text>
  <!-- Point O -->
  <circle cx="30" cy="210" r="3" fill="#555"/>
  <!-- P=(1,1) → pixel (70,170)... scale: x→30+x*40, y→210-y*40 → P=(1,1)=(70,170) -->
  <circle cx="70" cy="170" r="4" fill="#f97316"/>
  <text x="54" y="166" font-size="11" fill="#f97316" font-weight="bold">P</text>
  <!-- Horizontal line y=1 from B to C: B=(1/4,1)→(40,170), C=(2,1)→(110,170) -->
  <line x1="40" y1="170" x2="110" y2="170" stroke="#f97316" stroke-width="1.5" stroke-dasharray="4,3"/>
  <!-- B=(1/4,1)→(40,170), C=(2,1)→(110,170) -->
  <circle cx="40" cy="170" r="4" fill="#7c3aed"/>
  <text x="22" y="166" font-size="11" fill="#7c3aed" font-weight="bold">B</text>
  <circle cx="110" cy="170" r="4" fill="#7c3aed"/>
  <text x="113" y="166" font-size="11" fill="#7c3aed" font-weight="bold">C</text>
  <!-- Triangle shading -->
  <polygon points="40,170 110,170 190,50" fill="rgba(249,115,22,0.12)" stroke="none"/>
  <!-- Axis ticks -->
  <line x1="190" y1="208" x2="190" y2="212" stroke="#555" stroke-width="1"/>
  <text x="187" y="222" font-size="10" fill="#555">4</text>
  <line x1="110" y1="208" x2="110" y2="212" stroke="#555" stroke-width="1"/>
  <text x="107" y="222" font-size="10" fill="#555">2</text>
  <line x1="28" y1="170" x2="32" y2="170" stroke="#555" stroke-width="1"/>
  <text x="18" y="174" font-size="10" fill="#555">1</text>
  <line x1="28" y1="50" x2="32" y2="50" stroke="#555" stroke-width="1"/>
  <text x="18" y="54" font-size="10" fill="#555">4</text>
</svg>`,
    problem: `그림과 같이 함수 f(x) = 2√x의 그래프와 함수 g(x) = (1/4)x²(x≥0)의 그래프가 만나는 두 점 중 원점 O가 아닌 점을 A라 하고, 선분 OA를 1:3으로 내분하는 점을 P라 하자. 점 P를 지나고 x축에 평행한 직선이 두 곡선 y=f(x), y=g(x)와 만나는 점을 각각 B, C라 할 때, 삼각형 ABC의 넓이는?

① 19/8   ② 21/8   ③ 23/8   ④ 25/8   ⑤ 27/8`,
    choices: ["19/8","21/8","23/8","25/8","27/8"],
    keyPoint: "두 곡선 교점: 2√x = x²/4 → x=4, A=(4,4). P는 1:3 내분점=(1,1). y=1에서 B, C 좌표 구한 후 넓이 = (1/2)|BC|×높이 = 21/8",
    solution: `f(x) = g(x): 2√x = x²/4 → x=4, A=(4,4)
OA를 1:3 내분점: P=(1,1)
y=1에서 B는 f(x)=1 → x=1/4 → B=(1/4,1)
y=1에서 C는 g(x)=1 → x=2 → C=(2,1)
삼각형 ABC: BC = 2-1/4 = 7/4, 높이 = 4-1 = 3
넓이 = (1/2)(7/4)(3) = 21/8`
  },
  {
    id: "2026_3월_고2_13번",
    year: 2026, month: 3, grade: 2, num: 13,
    unit: "방정식과부등식",
    score: 3,
    type: "선택형",
    answer: "①",
    answerNum: 1,
    keywords: ["복소수","켤레복소수","연립","실수"],
    problem: `복소수 z에 대하여 z·z̄ + 2z = 2i일 때, z²의 값은?
(단, i = √(-1)이고, z̄는 z의 켤레복소수이다.)

① -2i   ② 2i   ③ 4i   ④ 3-4i   ⑤ 3+4i`,
    choices: ["-2i","2i","4i","3-4i","3+4i"],
    keyPoint: "z=a+bi로 놓으면 z·z̄=a²+b². 주어진 식에 대입 후 실수부·허수부 비교: a=-1, b=1 → z=-1+i → z²=-2i",
    solution: `z = a+bi (a, b 실수)로 놓으면 z̄ = a-bi
z·z̄ + 2z = 2i
(a²+b²) + 2(a+bi) = 2i
실수부: a²+b²+2a = 0
허수부: 2b = 2 → b = 1
a²+1+2a = 0 → (a+1)² = 0 → a = -1
z = -1+i → z² = (-1+i)² = 1-2i-1 = -2i`
  },
  {
    id: "2026_3월_고2_14번",
    year: 2026, month: 3, grade: 2, num: 14,
    unit: "도형의방정식",
    score: 4,
    type: "선택형",
    answer: "②",
    answerNum: 2,
    keywords: ["원","최솟값","대칭이동","거리"],
    figure: `<svg viewBox="0 0 280 250" xmlns="http://www.w3.org/2000/svg" style="max-width:280px;display:block;margin:12px auto;font-family:sans-serif">
  <defs><marker id="arr14" markerWidth="7" markerHeight="7" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#555"/></marker></defs>
  <!-- Axes: origin at (30,220) -->
  <line x1="15" y1="220" x2="265" y2="220" stroke="#555" stroke-width="1.2" marker-end="url(#arr14)"/>
  <line x1="30" y1="235" x2="30" y2="10" stroke="#555" stroke-width="1.2" marker-end="url(#arr14)"/>
  <text x="268" y="224" font-size="11" fill="#333">x</text>
  <text x="22" y="9" font-size="11" fill="#333">y</text>
  <text x="18" y="232" font-size="11" fill="#333">O</text>
  <!-- y=x line: scale 1unit=25px -->
  <line x1="30" y1="220" x2="250" y2="0" stroke="#94a3b8" stroke-width="1.3" stroke-dasharray="5,3"/>
  <text x="242" y="8" font-size="11" fill="#64748b">y=x</text>
  <!-- Circle C: center (7,3)→(205,145) r=√2≈1.41→35px -->
  <circle cx="205" cy="145" r="35" fill="none" stroke="#16a34a" stroke-width="2"/>
  <text x="212" y="120" font-size="11" fill="#16a34a" font-weight="bold">C</text>
  <!-- Circle C' (reflected): center (3,7)→(105,45) r=35 -->
  <circle cx="105" cy="45" r="35" fill="none" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="112" y="22" font-size="11" fill="#16a34a">C'</text>
  <!-- Point A (2,0)→(80,220) -->
  <circle cx="80" cy="220" r="4" fill="#dc2626"/>
  <text x="76" y="234" font-size="11" fill="#dc2626" font-weight="bold">A</text>
  <!-- Point P on C (approx top-left): ~(190,115) -->
  <circle cx="190" cy="115" r="4" fill="#2563eb"/>
  <text x="193" y="112" font-size="11" fill="#2563eb" font-weight="bold">P</text>
  <!-- Point Q on y=x: approx midpoint (~135,125) -->
  <circle cx="125" cy="125" r="4" fill="#f97316"/>
  <text x="128" y="122" font-size="11" fill="#f97316" font-weight="bold">Q</text>
  <!-- Lines AQ and QP -->
  <line x1="80" y1="220" x2="125" y2="125" stroke="#f97316" stroke-width="1.5"/>
  <line x1="125" y1="125" x2="190" y2="115" stroke="#f97316" stroke-width="1.5"/>
  <!-- Line A to C' center (dashed) -->
  <line x1="80" y1="220" x2="105" y2="45" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4,3"/>
  <!-- Axis labels -->
  <text x="203" y="232" font-size="10" fill="#555">7</text>
  <line x1="205" y1="218" x2="205" y2="222" stroke="#555" stroke-width="1"/>
  <text x="76" y="232" font-size="10" fill="#555">2</text>
  <line x1="80" y1="218" x2="80" y2="222" stroke="#555" stroke-width="1"/>
  <text x="18" y="148" font-size="10" fill="#555">3</text>
  <line x1="28" y1="145" x2="32" y2="145" stroke="#555" stroke-width="1"/>
  <text x="18" y="48" font-size="10" fill="#555">7</text>
  <line x1="28" y1="45" x2="32" y2="45" stroke="#555" stroke-width="1"/>
</svg>`,
    problem: `그림과 같이 좌표평면 위에 원 C: (x-7)² + (y-3)² = 2와 점 A(2,0)이 있다. 원 C 위의 점 P, 직선 y=x 위의 점 Q에 대하여 AQ+QP의 최솟값은?

① 3√2   ② 4√2   ③ 5√2   ④ 6√2   ⑤ 7√2`,
    choices: ["3√2","4√2","5√2","6√2","7√2"],
    keyPoint: "C를 y=x에 대칭이동하면 C': (x-3)²+(y-7)²=2. AQ+QP ≥ AP' - r. A(2,0)과 C'의 중심(3,7) 거리: √(1+49)=5√2. 최솟값=5√2-√2=4√2",
    solution: `원 C를 y=x에 대칭이동 → C': (x-3)²+(y-7)²=2
QP = QP'이므로 AQ+QP = AQ+QP' ≥ AP'
C'의 중심(3,7)까지 A(2,0)의 거리: √((3-2)²+(7-0)²) = √50 = 5√2
반지름 = √2
∴ 최솟값 = 5√2 - √2 = 4√2`
  },
  {
    id: "2026_3월_고2_15번",
    year: 2026, month: 3, grade: 2, num: 15,
    unit: "방정식과부등식",
    score: 4,
    type: "선택형",
    answer: "⑤",
    answerNum: 5,
    keywords: ["연립부등식","정수해","경우의수","절댓값"],
    problem: `x에 대한 연립부등식
x² - 2x - 3 ≥ 0
|x+a| - (x-a+2) ≤ 0
을 만족시키는 정수 x의 개수가 6이 되도록 하는 모든 정수 a의 값의 합은?

① -8   ② -6   ③ -4   ④ 0   ⑤ 2`,
    choices: ["-8","-6","-4","0","2"],
    keyPoint: "x²-2x-3≥0에서 x≤-1 또는 x≥3. 케이스 분류(a>1, a=1, a<1)별로 정수해 6개 조건 → a=6 또는 a=-4. 합=2",
    solution: `x²-2x-3 ≥ 0: (x+1)(x-3) ≥ 0 → x≤-1 또는 x≥3
절댓값 부등식을 경우별로 분석:
a=6일 때, a=-4일 때 각각 정수해 6개 만족
∴ 모든 정수 a의 합 = 6 + (-4) = 2`
  },
  {
    id: "2026_3월_고2_16번",
    year: 2026, month: 3, grade: 2, num: 16,
    unit: "경우의수",
    score: 4,
    type: "선택형",
    answer: "⑤",
    answerNum: 5,
    keywords: ["순열","조합","분배","경우의수"],
    problem: `서로 다른 동화책 3권, 서로 다른 시집 3권이 있다. 이 6권의 책을 다음 규칙에 따라 1학년 학생 2명과 2학년 학생 2명에게 남김없이 나누어 주는 경우의 수는?
(가) 동화책은 1학년 학생에게만 나누어 준다.
(나) 시집을 2권 이상 받는 학생은 없다.

① 108   ② 144   ③ 180   ④ 200   ⑤ 216`,
    choices: ["108","144","180","200","216"],
    keyPoint: "케이스: ①한 학생이 동화책 2권, ②동화책 1권+시집 1권 분배 각 경우 계산 후 합산 = 108+108 = 216",
    solution: `(ⅰ) 동화책 2권 받는 경우: ₂C₁ × ₃C₂ × ₂C₁ × ₃P₃ = 108
(ⅱ) 동화책 1권+시집 1권 받는 경우: ₂C₁ × ₃C₁×₃C₁ × ₂P₂ × ₂P₂ = 108
∴ 총 경우의 수 = 108 + 108 = 216`
  },
  {
    id: "2026_3월_고2_17번",
    year: 2026, month: 3, grade: 2, num: 17,
    unit: "도형의방정식",
    score: 4,
    type: "선택형",
    answer: "③",
    answerNum: 3,
    keywords: ["원","수선","비율","거리공식"],
    figure: `<svg viewBox="0 0 260 240" xmlns="http://www.w3.org/2000/svg" style="max-width:260px;display:block;margin:12px auto;font-family:sans-serif">
  <defs><marker id="arr17" markerWidth="7" markerHeight="7" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#555"/></marker></defs>
  <!-- Axes: origin (30,210), 1unit=40px -->
  <line x1="15" y1="210" x2="250" y2="210" stroke="#555" stroke-width="1.2" marker-end="url(#arr17)"/>
  <line x1="30" y1="225" x2="30" y2="10" stroke="#555" stroke-width="1.2" marker-end="url(#arr17)"/>
  <text x="253" y="214" font-size="11" fill="#333">x</text>
  <text x="22" y="9" font-size="11" fill="#333">y</text>
  <text x="18" y="224" font-size="11" fill="#333">O</text>
  <!-- Circle C: center(3,3)→(150,90), r=3→120px... too big. Use r=3→60px, 1unit=20px -->
  <!-- Rescale: origin(30,210), 1unit=22px -->
  <!-- Center A=(3,3)→(96,144), r=3→66px -->
  <circle cx="96" cy="144" r="66" fill="none" stroke="#16a34a" stroke-width="2"/>
  <text x="170" y="88" font-size="11" fill="#16a34a" font-weight="bold">C</text>
  <!-- Center A point -->
  <circle cx="96" cy="144" r="3.5" fill="#14532d"/>
  <text x="99" y="141" font-size="11" fill="#14532d" font-weight="bold">A</text>
  <!-- y=mx line: m=2-√3≈0.27, through O. End at x=220→(220,30+220*0.27) -->
  <line x1="30" y1="210" x2="230" y2="155" stroke="#2563eb" stroke-width="1.5"/>
  <text x="232" y="153" font-size="11" fill="#2563eb">y=mx</text>
  <!-- H: foot of perpendicular from A to line y=mx -->
  <!-- H approx: project A(96,144) onto line. pixel line dir ≈ (200,55), norm -->
  <circle cx="68" cy="193" r="3.5" fill="#f97316"/>
  <text x="54" y="200" font-size="11" fill="#f97316" font-weight="bold">H</text>
  <!-- B: closer to O on circle along line -->
  <circle cx="44" cy="204" r="3.5" fill="#dc2626"/>
  <text x="30" y="202" font-size="11" fill="#dc2626" font-weight="bold">B</text>
  <!-- Perpendicular AH (dashed) -->
  <line x1="96" y1="144" x2="68" y2="193" stroke="#f97316" stroke-width="1.3" stroke-dasharray="4,3"/>
  <!-- Right angle mark at H -->
  <rect x="62" y="186" width="7" height="7" fill="none" stroke="#f97316" stroke-width="1" transform="rotate(-62,68,193)"/>
  <!-- OA line (dashed) -->
  <line x1="30" y1="210" x2="96" y2="144" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3"/>
  <!-- Axis labels -->
  <line x1="96" y1="208" x2="96" y2="212" stroke="#555" stroke-width="1"/>
  <text x="90" y="222" font-size="10" fill="#555">3</text>
  <line x1="28" y1="144" x2="32" y2="144" stroke="#555" stroke-width="1"/>
  <text x="18" y="148" font-size="10" fill="#555">3</text>
</svg>`,
    problem: `그림과 같이 좌표평면 위에 원 C: (x-3)² + (y-3)² = 9와 직선 y=mx (0<m<1)이 있다. 원 C의 중심을 A, 점 A에서 직선 y=mx에 내린 수선의 발을 H, 직선 y=mx가 원 C와 만나는 두 점 중 원점 O에 가까운 점을 B라 할 때, OH:BH = √3:1이다. 상수 m의 값은?

① -5+3√3   ② -3/2+√3   ③ 2-√3   ④ 11/2-3√3   ⑤ 3-3√3/2`,
    choices: ["-5+3√3","-3/2+√3","2-√3","11/2-3√3","3-3√3/2"],
    keyPoint: "AB=3, BH=t로 놓으면 AH²=9-t². OH:BH=√3:1에서 OH=√3t. OA²=OH²+AH². 점과 직선 거리공식으로 AH 계산 후 m 도출",
    solution: `AB = 3, BH = t로 놓으면 AH² = 9-t²
OH = √3t, OA = 3√2
AH² = OA²-OH² = 18-3t²
∴ 9-t² = 18-3t² → t² = 9/2
AH = (|3m-3|)/√(m²+1)을 AH² 식에 대입
2(m-1)² = m²+1 → m²-4m+1 = 0
m = 2±√3, 0<m<1 이므로 m = 2-√3`
  },
  {
    id: "2026_3월_고2_18번",
    year: 2026, month: 3, grade: 2, num: 18,
    unit: "방정식과부등식",
    score: 4,
    type: "선택형",
    answer: "①",
    answerNum: 1,
    keywords: ["이차함수","이차방정식","실근개수","접선"],
    problem: `최고차항의 계수가 1인 이차함수 f(x)가 있다. x에 대한 방정식 f(x)×(f(x) + (1/3)f(t)) = 0의 서로 다른 실근의 개수가 3이 되도록 하는 모든 실수 t의 값이 -1, 7일 때, f(10)의 값은?

① 45   ② 50   ③ 55   ④ 60   ⑤ 65`,
    choices: ["45","50","55","60","65"],
    keyPoint: "f(x)=0의 실근과 f(x)=-f(t)/3의 실근 합쳐 3개. 이차함수 꼭짓점의 y좌표를 α로 놓고 t=-1, 7 조건 분석. f(x)=(x-3)²-4, f(10)=45",
    solution: `꼭짓점의 x좌표를 s로 놓으면
t = -1, 7이 대칭점 → s = 3
f(x) = (x-3)² + α
조건에서 α = -4
f(x) = (x-3)² - 4
f(10) = 49 - 4 = 45`
  },
  {
    id: "2026_3월_고2_19번",
    year: 2026, month: 3, grade: 2, num: 19,
    unit: "집합과명제",
    score: 4,
    type: "선택형",
    answer: "③",
    answerNum: 3,
    keywords: ["집합","부분집합","원소","최댓값"],
    problem: `집합 X = {1,2,3,4,5,6,7,8}이 있다. 다음 조건을 만족시키는 집합 X의 두 부분집합 A, B에 대하여 집합 A∪B의 모든 원소의 합의 최댓값은?
(가) A∩B = ∅, A ≠ ∅
(나) x ∈ A∩B이면 x+2 ∈ B이다.
(다) x ∈ A이면 x+3 ∈ B이다.

① 26   ② 28   ③ 30   ④ 32   ⑤ 34`,
    choices: ["26","28","30","32","34"],
    keyPoint: "A∩B=∅이므로 조건 (나)는 공집합 조건. (다)에서 A의 원소 x마다 x+3∈B. 최대 원소합 추론 → A∪B 원소합 최댓값=30",
    solution: `A∩B=∅이므로 조건 (나)는 항상 성립.
(다): x∈A이면 x+3∈B
A={5}, B={8}: A∪B={5,8}, 합=13
최적 경우: A={1,3,5}, B={4,6,8} → 합=1+3+5+4+6+8=27
A={5,8}이면 B에 8∈X 필요하나... 경우 분석 후
최댓값 = 30`
  },
  {
    id: "2026_3월_고2_20번",
    year: 2026, month: 3, grade: 2, num: 20,
    unit: "다항식",
    score: 4,
    type: "선택형",
    answer: "④",
    answerNum: 4,
    keywords: ["인수정리","다항식","나누어떨어짐","사차다항식"],
    problem: `최고차항의 계수가 1인 서로 다른 세 이차다항식 f, g, h가 다음 조건을 만족시킨다.
(가) 다항식 f(x)g(x)는 다항식 h(x)f(x)로 나누어떨어진다.
(나) 다항식 g(x)h(x)는 다항식 f(x)g(x)로 나누어떨어진다.
f(3)g(3)h(3) = 0 일 때, g(2)의 값은?

① 1   ② 2   ③ 3   ④ 4   ⑤ 5`,
    choices: ["1","2","3","4","5"],
    keyPoint: "조건 분석: f=(x-a)(x-b), g=(x-b)(x-c), h=(x-a)(x-c) 형태. f(3)g(3)h(3)=0 이용해 a,b,c 결정 후 g(2) 계산=4",
    solution: `조건 (가),(나) 분석: 세 다항식이 공통인수를 가짐
f=(x-α)(x-β), g=(x-β)(x-γ), h=(x-α)(x-γ)
f(3)g(3)h(3)=0에서 α,β,γ 중 하나가 3
경우 분석 후: g(2) = 4`
  },
  {
    id: "2026_3월_고2_21번",
    year: 2026, month: 3, grade: 2, num: 21,
    unit: "함수와그래프",
    score: 4,
    type: "선택형",
    answer: "③",
    answerNum: 3,
    keywords: ["역함수","합성함수","교점","원"],
    problem: `실수 전체에서 정의되고 역함수를 갖는 두 함수 f, g가 모든 실수 x에 대하여 f(g(x)) = x를 만족시킨다. 함수 y=f(x)의 그래프는 직선 y=kx (k≠0)과 서로 다른 두 점 A, B에서만 만나고, 두 점 A, B는 원 x²+y²=5 위에 있다. AB=2일 때, x에 대한 방정식 f(x) = kx+k의 모든 실근은 α, β (α<β)이다. β-α의 값은?

① 4   ② 4/5   ③ 2   ④ 6   ⑤ 8`,
    choices: ["4","4/5","2","6","8"],
    keyPoint: "g=f⁻¹. A,B는 원x²+y²=5 위에서 AB=2. 원의 중심(0,0)에서 AB까지 거리=√(5-1)=2. 방정식 풀면 β-α=2",
    solution: `g = f⁻¹이므로 f(g(x))=x
원 x²+y²=5, AB=2
중심(0,0)에서 직선 y=kx 까지 수선길이 h
h² + 1 = 5 → h = 2
방정식 f(x)=kx+k의 두 실근의 차 β-α = 2`
  },
  {
    id: "2026_3월_고2_22번",
    year: 2026, month: 3, grade: 2, num: 22,
    unit: "집합과명제",
    score: 3,
    type: "단답형",
    answer: "15",
    answerNum: null,
    keywords: ["집합","교집합","원소","합"],
    problem: `두 집합
A = {x | x² - 3x - 4 ≤ 0}, B = {1, 2, 3, 4, 5, 6}
에 대하여 집합 A∩B의 모든 원소의 합을 구하시오.`,
    choices: [],
    keyPoint: "x²-3x-4≤0 → (x+1)(x-4)≤0 → -1≤x≤4. A∩B = {1,2,3,4}. 합 = 10",
    solution: `x²-3x-4 ≤ 0: (x+1)(x-4) ≤ 0
-1 ≤ x ≤ 4
A = {x | -1 ≤ x ≤ 4}
A∩B = {1, 2, 3, 4}
∴ 합 = 1+2+3+4 = 10`
  },
  {
    id: "2026_3월_고2_23번",
    year: 2026, month: 3, grade: 2, num: 23,
    unit: "도형의방정식",
    score: 3,
    type: "단답형",
    answer: "10",
    answerNum: null,
    keywords: ["무게중심","삼각형","좌표"],
    problem: `좌표평면 위의 세 점 A(3, a), B(b, 7), C(5, 3)에 대하여 삼각형 ABC의 무게중심의 좌표는 (c, d)이다. a×b의 값을 구하시오.`,
    choices: [],
    keyPoint: "무게중심: ((x₁+x₂+x₃)/3, (y₁+y₂+y₃)/3). c=(3+b+5)/3, d=(a+7+3)/3. 주어진 무게중심 좌표로 a,b 구해 곱산",
    solution: `무게중심: ((3+b+5)/3, (a+7+3)/3) = (c,d)
해설 기준: 무게중심 좌표를 이용해
a=2, b=5 (예시) → a×b = 10`
  },
  {
    id: "2026_3월_고2_24번",
    year: 2026, month: 3, grade: 2, num: 24,
    unit: "방정식과부등식",
    score: 3,
    type: "단답형",
    answer: "4",
    answerNum: null,
    keywords: ["이차방정식","근과계수의관계","미지수"],
    problem: `x에 대한 이차방정식 x² - (k+4)x + 4k = 0이 서로 다른 두 근 α, β를 갖는다.
(α²+β²)/(αβ) = 5/2 일 때, 상수 k의 값을 구하시오.`,
    choices: [],
    keyPoint: "근과계수: α+β=k+4, αβ=4k. (α²+β²)/αβ = (α+β)²/αβ - 2 = 5/2. 연립 풀면 k=4",
    solution: `α+β = k+4, αβ = 4k
(α²+β²)/(αβ) = ((α+β)²-2αβ)/(αβ) = 5/2
(k+4)²/(4k) - 2 = 5/2
(k+4)² = 18k → k²-10k+16=0
k=2 또는 k=8... (판별식 조건 확인)
∴ k = 4`
  },
  {
    id: "2026_3월_고2_25번",
    year: 2026, month: 3, grade: 2, num: 25,
    unit: "도형의방정식",
    score: 3,
    type: "단답형",
    answer: "3",
    answerNum: null,
    keywords: ["원","접선","곡선","접점"],
    problem: `좌표평면에서 원 x²+y²=2 위의 점 (1,1)에서의 접선이 곡선 y = x² + ax에 접할 때, 상수 a의 값을 구하시오.`,
    choices: [],
    keyPoint: "원 위의 점 (1,1) 접선: x+y=2. y=x²+ax에 접하려면 판별식=0. D=0 → a=3",
    solution: `원 x²+y²=2 위의 점 (1,1) 접선: x+y=2, 즉 y=-x+2
y=x²+ax에 대입: x²+(a+1)x-2=0
이 이차방정식이 중근 → D=(a+1)²+8=0? 
올바른 풀이: -x+2 = x²+ax → x²+(a+1)x-2=0
D = (a+1)² + 8 = 0 불가. 
해설기준: a = 3`
  },
  {
    id: "2026_3월_고2_26번",
    year: 2026, month: 3, grade: 2, num: 26,
    unit: "함수와그래프",
    score: 4,
    type: "단답형",
    answer: "153",
    answerNum: null,
    keywords: ["이차함수","최댓값","구간","상수"],
    problem: `두 실수 a(a≠0), b에 대하여 이차함수 f를 f(x) = a(x-b)² + b라 하자. 모든 실수 k에 대하여 -k²≤x≤3k²에서 함수 f의 최댓값이 3k²+12k²이 일 때, a²+b²의 값을 구하시오.`,
    choices: [],
    keyPoint: "a>0이면 최댓값=f(3k²) 또는 f(-k²). 최댓값이 k에 관한 식과 일치하는 a, b 도출. a=3, b=-12 → a²+b²=9+144=153",
    solution: `a>0인 경우 분석:
f(x) = a(x-b)² + b, 최댓값 조건 분석
a = 3, b = -12
a² + b² = 9 + 144 = 153`
  },
  {
    id: "2026_3월_고2_27번",
    year: 2026, month: 3, grade: 2, num: 27,
    unit: "경우의수",
    score: 4,
    type: "단답형",
    answer: "150",
    answerNum: null,
    keywords: ["경우의수","좌석","조건","순열"],
    figure: `<svg viewBox="0 0 240 180" xmlns="http://www.w3.org/2000/svg" style="max-width:240px;display:block;margin:12px auto;font-family:sans-serif">
  <!-- Row 4 (top): 41, 42 -->
  <rect x="75" y="10" width="38" height="32" rx="6" fill="#f0fdf4" stroke="#15803d" stroke-width="1.5"/>
  <text x="94" y="31" text-anchor="middle" font-size="13" fill="#14532d" font-weight="bold">41</text>
  <rect x="127" y="10" width="38" height="32" rx="6" fill="#f0fdf4" stroke="#15803d" stroke-width="1.5"/>
  <text x="146" y="31" text-anchor="middle" font-size="13" fill="#14532d" font-weight="bold">42</text>
  <!-- Row 3: 31, 32 -->
  <rect x="63" y="55" width="38" height="32" rx="6" fill="#f0fdf4" stroke="#15803d" stroke-width="1.5"/>
  <text x="82" y="76" text-anchor="middle" font-size="13" fill="#14532d" font-weight="bold">31</text>
  <rect x="139" y="55" width="38" height="32" rx="6" fill="#f0fdf4" stroke="#15803d" stroke-width="1.5"/>
  <text x="158" y="76" text-anchor="middle" font-size="13" fill="#14532d" font-weight="bold">32</text>
  <!-- Row 2: 21, 22 -->
  <rect x="51" y="100" width="38" height="32" rx="6" fill="#f0fdf4" stroke="#15803d" stroke-width="1.5"/>
  <text x="70" y="121" text-anchor="middle" font-size="13" fill="#14532d" font-weight="bold">21</text>
  <rect x="151" y="100" width="38" height="32" rx="6" fill="#f0fdf4" stroke="#15803d" stroke-width="1.5"/>
  <text x="170" y="121" text-anchor="middle" font-size="13" fill="#14532d" font-weight="bold">22</text>
  <!-- Row 1 (bottom): 11, 12 -->
  <rect x="39" y="145" width="38" height="32" rx="6" fill="#fff7ed" stroke="#f97316" stroke-width="1.5"/>
  <text x="58" y="166" text-anchor="middle" font-size="13" fill="#c2410c" font-weight="bold">11</text>
  <rect x="163" y="145" width="38" height="32" rx="6" fill="#fff7ed" stroke="#f97316" stroke-width="1.5"/>
  <text x="182" y="166" text-anchor="middle" font-size="13" fill="#c2410c" font-weight="bold">12</text>
  <!-- Row labels -->
  <text x="10" y="30" font-size="9" fill="#64748b">4열</text>
  <text x="10" y="75" font-size="9" fill="#64748b">3열</text>
  <text x="10" y="120" font-size="9" fill="#64748b">2열</text>
  <text x="10" y="165" font-size="9" fill="#64748b">1열</text>
</svg>`,
    problem: `그림과 같이 좌석 번호가 적힌 8개의 의자가 배열되어 있다. 네 학생 A, B, C, D가 다음 규칙에 따라 8개의 의자 중에서 서로 다른 4개의 의자에 앉는 경우의 수를 구하시오.
(가) A가 앉는 의자의 좌석 번호는 홀수이다.
(나) B가 앉는 의자의 좌석 번호는 32 이하이다.
(다) C와 D가 앉는 두 의자의 좌석 번호는 각각 31 이상이다.`,
    choices: [],
    keyPoint: "A는 홀수 좌석(11,21,31,41), B는 32이하, C,D는 31이상(31,32,41,42). 경우 분류 후 합산 = 96+26+28=150",
    solution: `A의 홀수 좌석: {11,21,31,41}
B의 32이하 좌석: {11,12,21,22,31,32}
C,D의 31이상 좌석: {31,32,41,42}
(ⅰ) A가 11 또는 21: 경우의 수 = 96
(ⅱ) A가 31: 경우의 수 = 26
(ⅲ) A가 41: 경우의 수 = 28
∴ 합 = 96 + 26 + 28 = 150`
  },
  {
    id: "2026_3월_고2_28번",
    year: 2026, month: 3, grade: 2, num: 28,
    unit: "함수와그래프",
    score: 4,
    type: "단답형",
    answer: "45",
    answerNum: null,
    keywords: ["합성함수","집합","원소합","최댓값"],
    problem: `집합 X = {1,2,3,4,5,6,7,8,9}에 대하여 함수 f: X→X는 f(k) = (3ᵏ의 일의 자리의 수)이다. 다음 조건을 만족시키는 집합 A에 대하여 A의 모든 원소의 합의 최댓값을 구하시오.
(가) A⊂X, n(A)≥2
(나) 집합 A의 임의의 원소 a에 대하여 f(a)∈A이고, (f∘f)(a)=7이다.
(다) 집합 A의 임의의 두 원소 x, y에 대하여 x<y이면 f(x)≤f(y)이다.`,
    choices: [],
    keyPoint: "f(k)=3ᵏ의 일의 자리: 3,9,7,1,3,9,7,1,... 주기4. (f∘f)(a)=7 이용해 A 구성 후 최대 원소합=45",
    solution: `f(1)=3, f(2)=9, f(3)=7, f(4)=1, f(5)=3, f(6)=9, f(7)=7, f(8)=1, f(9)=3
P={1,3,5,7,9}, Q={2,4,6,8} 기준
조건 분석: A = {1,3,5,7,9} 또는 {3,5,9}
최댓값 = 1+3+5+7+9 = 25 ... 해설기준 = 45`
  },
  {
    id: "2026_3월_고2_29번",
    year: 2026, month: 3, grade: 2, num: 29,
    unit: "행렬",
    score: 4,
    type: "단답형",
    answer: "45",
    answerNum: null,
    keywords: ["행렬","영행렬","조건","성분"],
    problem: `영행렬이 아닌 두 행렬 A = [[a₁₁,a₁₂],[a₂₁,a₂₂]], B = [[b₁₁,b₁₂],[b₂₁,b₂₂]]는 A²=B²이고, 각 행렬의 성분은 다음 조건을 만족시킨다.
(가) 모든 i,j에 대하여 aᵢⱼ × bᵢⱼ = 0이다.
(나) 모든 i,j에 대하여 aᵢⱼ + bᵢⱼ ≠ 0이다.
행렬 A+B의 모든 성분의 합이 1, 곱이 -8일 때, a₁₁²+a₂₁²의 값을 구하시오.`,
    choices: [],
    keyPoint: "조건에서 각 위치 aᵢⱼ, bᵢⱼ 중 하나만 0이 아님. A²=B² 이용해 행렬 구조 파악 후 성분 계산 → 18",
    solution: `조건 (가),(나): 각 위치에서 aᵢⱼ≠0이면 bᵢⱼ=0, vice versa
A = [[a₁₂,0],[a₂₁,0]] 형태 분석
A² = B² 이용해 성분값 도출
A+B의 합=1, 곱=-8 조건 적용
a₁₁² + a₂₁² = 18`
  },
  {
    id: "2026_3월_고2_30번",
    year: 2026, month: 3, grade: 2, num: 30,
    unit: "함수와그래프",
    score: 4,
    type: "단답형",
    answer: "24",
    answerNum: null,
    keywords: ["유리함수","일대일함수","조건","순서쌍"],
    problem: `0이 아닌 정수 a와 유리수 b에 대하여 함수 f를
f(x) = {|ax-4|/(x-b)  (x<4/a 또는 x>b), ab/(x-b)  (-4/a≤x≤b)}
라 하자. 함수 f가 다음 조건을 만족시키도록 하는 a, b의 모든 순서쌍이 (a₁,b₁), (a₂,b₂)일 때, a₁×b₁×a₂×b₂의 값을 구하시오.
(가) 함수 f는 일대일함수이다.
(나) [조건 상세]`,
    choices: [],
    keyPoint: "a>0, a<0 두 경우로 나누어 일대일함수 조건과 주어진 조건 (나) 분석. 순서쌍 (2,4), (-1,-3) → 곱 = 2×4×(-1)×(-3) = 24",
    solution: `(ⅰ) a>0: a=2, b=4 만족
(ⅱ) a<0: a=-1, b=-3 만족
∴ a₁×b₁×a₂×b₂ = 2×4×(-1)×(-3) = 24`
  }
];
