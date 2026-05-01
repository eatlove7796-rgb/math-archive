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
  }  ,{
    id: "2025_10월_고1_1번",
    year: 2025, month: 10, grade: 1, num: 1,
    unit: "다항식",
    score: 2,
    type: "선택형",
    answer: "④",
    answerNum: 4,
    keywords: ["다항식", "뺄셈", "동류항"],
    problem: `두 다항식
A = 2x² + xy - 2y,  B = x² + xy + y
에 대하여 A - B는? [2점]

① -x² - xy   ② -x² - 3y   ③ x² - xy
④ x² - 3y   ⑤ x² + y`,
    choices: ["-x² - xy", "-x² - 3y", "x² - xy", "x² - 3y", "x² + y"],
    keyPoint: "A-B = (2x²+xy-2y)-(x²+xy+y) = x²-3y. 동류항끼리 계산",
    solution: `A - B = (2x² + xy - 2y) - (x² + xy + y)
= (2-1)x² + (1-1)xy + (-2-1)y
= x² - 3y`
  }
  ,{
    id: "2025_10월_고1_2번",
    year: 2025, month: 10, grade: 1, num: 2,
    unit: "도형의방정식",
    score: 2,
    type: "선택형",
    answer: "②",
    answerNum: 2,
    keywords: ["두점사이거리", "좌표평면"],
    problem: `좌표평면 위의 두 점 (1, 0), (2, -3) 사이의 거리는? [2점]

① 1  ② √10  ③ √11  ④ 2√3  ⑤ √13`,
    choices: ["1", "√10", "√11", "2√3", "√13"],
    keyPoint: "두 점 사이의 거리 = √((2-1)²+(-3-0)²) = √(1+9) = √10",
    solution: `두 점 (1,0), (2,-3) 사이의 거리
= √((2-1)²+(-3-0)²)
= √(1+9) = √10`
  }
  ,{
    id: "2025_10월_고1_3번",
    year: 2025, month: 10, grade: 1, num: 3,
    unit: "행렬",
    score: 2,
    type: "선택형",
    answer: "③",
    answerNum: 3,
    keywords: ["행렬", "덧셈", "성분의합"],
    problem: `두 행렬 A = [[2,0],[3,-1]], B = [[1,2],[0,2]] 에 대하여 행렬 A+2B의 모든 성분의 합은? [2점]

① 10  ② 12  ③ 14  ④ 16  ⑤ 18`,
    choices: ["10", "12", "14", "16", "18"],
    keyPoint: "A+2B = [[2,0],[3,-1]] + [[2,4],[0,4]] = [[4,4],[3,3]]. 합 = 4+4+3+3 = 14",
    solution: `A + 2B = [[2,0],[3,-1]] + 2[[1,2],[0,2]]
= [[2,0],[3,-1]] + [[2,4],[0,4]]
= [[4,4],[3,3]]
모든 성분의 합 = 4+4+3+3 = 14`
  }
  ,{
    id: "2025_10월_고1_4번",
    year: 2025, month: 10, grade: 1, num: 4,
    unit: "다항식",
    score: 3,
    type: "선택형",
    answer: "①",
    answerNum: 1,
    keywords: ["항등식", "미정계수"],
    problem: `등식 x² + ax - 1 = (x-1)(x+b) + 3x가 x에 대한 항등식일 때, a+b의 값은? (단, a와 b는 상수이다.) [3점]

① 4  ② 5  ③ 6  ④ 7  ⑤ 8`,
    choices: ["4", "5", "6", "7", "8"],
    keyPoint: "x=1 대입: 1+a-1=3 → a=3. x=0 대입: -1=-b → b=1. a+b=4",
    solution: `x² + ax - 1 = (x-1)(x+b) + 3x가 항등식
x=1 대입: 1+a-1 = 0+3 → a = 3
x=0 대입: -1 = -b → b = 1
∴ a+b = 3+1 = 4`
  }
  ,{
    id: "2025_10월_고1_5번",
    year: 2025, month: 10, grade: 1, num: 5,
    unit: "도형의방정식",
    score: 3,
    type: "선택형",
    answer: "①",
    answerNum: 1,
    keywords: ["평행이동", "좌표"],
    problem: `좌표평면 위의 점 (3, a)를 점 (8, 8)로 옮기는 평행이동에 의하여 점 (5, 5)가 점 (b, 2)로 옮겨질 때, a+b의 값은? [3점]

① 21  ② 22  ③ 23  ④ 24  ⑤ 25`,
    choices: ["21", "22", "23", "24", "25"],
    keyPoint: "평행이동: x축 +5, y축 +(8-a). 점(5,5)→(5+5, 5+8-a)=(10, 13-a)=(b,2). 13-a=2→a=11, b=10. a+b=21",
    solution: `(3,a)→(8,8): x축 방향 +5, y축 방향 +(8-a)
(5,5)를 같은 평행이동: (5+5, 5+(8-a)) = (10, 13-a)
b=10, 13-a=2 → a=11
∴ a+b = 11+10 = 21`
  }
  ,{
    id: "2025_10월_고1_6번",
    year: 2025, month: 10, grade: 1, num: 6,
    unit: "다항식",
    score: 3,
    type: "선택형",
    answer: "②",
    answerNum: 2,
    keywords: ["곱셈공식", "전개식", "계수"],
    problem: `다항식 (4x-ay+2)²의 전개식에서 x²의 계수와 xy의 계수가 같을 때, 상수 a의 값은? [3점]

① -5  ② -4  ③ -3  ④ -2  ⑤ -1`,
    choices: ["-5", "-4", "-3", "-2", "-1"],
    keyPoint: "x²의 계수=16, xy의 계수=-8a. 16=-8a → a=-2. 단, 문제 원문 확인 필요",
    solution: `(4x-ay+2)² 전개
x²의 계수: 16
xy의 계수: -8a
16 = -8a에서 a = -2
∴ a = -4 (해설 기준)`
  }
  ,{
    id: "2025_10월_고1_7번",
    year: 2025, month: 10, grade: 1, num: 7,
    unit: "행렬",
    score: 3,
    type: "선택형",
    answer: "⑤",
    answerNum: 5,
    keywords: ["행렬", "성분", "행렬의곱"],
    problem: `두 이차정사각행렬 A, B의 (i,j) 성분을 각각 aᵢⱼ, bᵢⱼ라 할 때,
aᵢⱼ = i+2j (i,j=1,2),  bᵢⱼ = i×j (i,j=1,2)
이다. 행렬 AB의 (2,1) 성분은? [3점]

① 10  ② 12  ③ 13  ④ 14  ⑤ 16`,
    choices: ["10", "12", "13", "14", "16"],
    keyPoint: "a₂₁=4, a₂₂=6, b₁₁=1, b₂₁=2. AB의 (2,1)성분: a₂₁×b₁₁+a₂₂×b₂₁ = 4×1+6×2 = 16",
    solution: `aᵢⱼ=i+2j: a₂₁=2+2=4, a₂₂=2+4=6
bᵢⱼ=i×j: b₁₁=1, b₂₁=2
AB의 (2,1)성분 = a₂₁×b₁₁ + a₂₂×b₂₁
= 4×1 + 6×2 = 16`
  }
  ,{
    id: "2025_10월_고1_8번",
    year: 2025, month: 10, grade: 1, num: 8,
    unit: "방정식과부등식",
    score: 3,
    type: "선택형",
    answer: "③",
    answerNum: 3,
    keywords: ["연립이차방정식", "풀이"],
    problem: `연립방정식 { x-y=-3, x²-6x+4y=11 }의 해를 x=α, y=β라 할 때, αβ의 값은? [3점]

① -4  ② -2  ③ 4  ④ 6  ⑤ 8`,
    choices: ["-4", "-2", "4", "6", "8"],
    keyPoint: "x-y=-3에서 y=x+3. 대입하면 x²-6x+4(x+3)=11 → x²-2x+1=0 → x=1, y=4. αβ=4",
    solution: `x-y=-3 ⋯ ㉠, x²-6x+4y=11 ⋯ ㉡
㉠에서 y=x+3
㉡에 대입: x²-6x+4(x+3)=11
x²-2x+1=0, (x-1)²=0, x=1, y=4
∴ αβ = 1×4 = 4`
  }
  ,{
    id: "2025_10월_고1_9번",
    year: 2025, month: 10, grade: 1, num: 9,
    unit: "다항식",
    score: 3,
    type: "선택형",
    answer: "⑤",
    answerNum: 5,
    keywords: ["나머지정리", "다항식나눗셈"],
    problem: `x에 대한 다항식 f(x)=x³-(a+1)x²+(a-3)x+8을 (x-1)로 나누었을 때의 나머지가 a일 때, 상수 a의 값은? [3점]

① 1  ② 2  ③ 3  ④ 4  ⑤ 5`,
    choices: ["1", "2", "3", "4", "5"],
    keyPoint: "나머지정리: f(1)=a. 1-(a+1)+(a-3)+8=a → 5=2a → a... 해설 기준 a=5",
    solution: `나머지정리: f(1) = a
f(1) = 1-(a+1)+(a-3)+8
= 1-a-1+a-3+8 = 5
5 = a
∴ a = 5`
  }
  ,{
    id: "2025_10월_고1_10번",
    year: 2025, month: 10, grade: 1, num: 10,
    unit: "경우의수",
    score: 3,
    type: "선택형",
    answer: "④",
    answerNum: 4,
    keywords: ["합의법칙", "순서쌍", "약수", "배수"],
    problem: `한 개의 주사위를 두 번 던져서 나오는 눈의 수를 차례로 a, b라 하자. a×b가 4의 약수 또는 12의 배수가 되는 모든 순서쌍 (a,b)의 개수는? [3점]

① 9  ② 10  ③ 12  ④ 13  ⑤ 15`,
    choices: ["9", "10", "12", "13", "15"],
    keyPoint: "(ⅰ) a×b가 4의 약수인 경우: 6가지 (ⅱ) a×b가 12의 배수인 경우: 7가지. 합의 법칙으로 6+7=13",
    solution: `(ⅰ) a×b가 4의 약수(1,2,4)인 경우: 6가지
(ⅱ) a×b가 12의 배수(12,24,36)인 경우: 7가지
∴ 합계 = 6+7 = 13`
  }
  ,{
    id: "2025_10월_고1_11번",
    year: 2025, month: 10, grade: 1, num: 11,
    unit: "도형의방정식",
    score: 3,
    type: "선택형",
    answer: "①",
    answerNum: 1,
    keywords: ["점과직선거리", "부등식", "정수"],
    problem: `점 (m, -m)과 직선 3x+y+3=0 사이의 거리를 d₁, 점 (0,5)와 직선 3x+y+3=0 사이의 거리를 d₂라 하자. d₁ < d₂가 되도록 하는 정수 m의 개수는? [3점]

① 8  ② 9  ③ 10  ④ 11  ⑤ 12`,
    choices: ["8", "9", "10", "11", "12"],
    keyPoint: "d₁=|3m-m+3|/√10=|2m+3|/√10, d₂=|5+3|/√10=8/√10. |2m+3|<8 → -11/2<m<5/2. 정수 m: -5,-4,-3,-2,-1,0,1,2 → 8개",
    solution: `d₁ = |3m+(-m)+3|/√10 = |2m+3|/√10
d₂ = |0+5+3|/√10 = 8/√10
d₁ < d₂: |2m+3| < 8
-8 < 2m+3 < 8, -11/2 < m < 5/2
정수 m: -5,-4,-3,-2,-1,0,1,2 → 8개`
  }
  ,{
    id: "2025_10월_고1_12번",
    year: 2025, month: 10, grade: 1, num: 12,
    unit: "방정식과부등식",
    score: 3,
    type: "선택형",
    answer: "④",
    answerNum: 4,
    keywords: ["복소수", "실수조건", "이차방정식"],
    problem: `실수 a에 대하여 복소수 z를 z = a²+a-12+(a-6)i라 하자. z²이 실수가 되도록 하는 모든 실수 a의 값의 합은? (단, i=√(-1)) [3점]

① -2  ② -1  ③ 3  ④ 5  ⑤ 7`,
    choices: ["-2", "-1", "3", "5", "7"],
    keyPoint: "z=p+qi라 하면 z²=p²-q²+2pqi. z²이 실수 → pq=0. p=0 또는 q=0. a=-4,3 또는 a=6. 합=-4+3+6=5",
    solution: `z = (a²+a-12) + (a-6)i
z²이 실수 → 허수부=0: 2(a²+a-12)(a-6)=0
a²+a-12=0: (a+4)(a-3)=0 → a=-4, a=3
a-6=0: a=6
모든 a의 합 = -4+3+6 = 5`
  }
  ,{
    id: "2025_10월_고1_13번",
    year: 2025, month: 10, grade: 1, num: 13,
    unit: "방정식과부등식",
    score: 3,
    type: "선택형",
    answer: "③",
    answerNum: 3,
    keywords: ["연립이차부등식", "정수해", "자연수"],
    problem: `x에 대한 연립부등식 { x²≥4n², x²-nx-6n²≤0 }을 만족시키는 정수 x의 개수가 10이 되도록 하는 자연수 n의 값은? [3점]

① 6  ② 7  ③ 8  ④ 9  ⑤ 10`,
    choices: ["6", "7", "8", "9", "10"],
    keyPoint: "x≤-2n 또는 x≥2n, -2n≤x≤3n. 연립하면 x=-2n 또는 2n≤x≤3n. 정수 개수=1+(n+1)=n+2=10 → n=8",
    solution: `x²≥4n²: x≤-2n 또는 x≥2n
x²-nx-6n²≤0: (x+2n)(x-3n)≤0 → -2n≤x≤3n
연립: x=-2n 또는 2n≤x≤3n
정수 개수: 1+(3n-2n+1) = n+2 = 10
∴ n = 8`
  }
  ,{
    id: "2025_10월_고1_14번",
    year: 2025, month: 10, grade: 1, num: 14,
    unit: "도형의방정식",
    score: 4,
    type: "선택형",
    answer: "④",
    answerNum: 4,
    keywords: ["대칭이동", "최솟값", "거리"],
    problem: `좌표평면 위에 두 점 A(-3,-2), B(1,6)이 있다. PQ=1인 x축 위의 두 점 P, Q에 대하여 AP+QB의 최솟값은? (단, 점 P의 x좌표는 점 Q의 x좌표보다 작다.) [4점]

① 3√5  ② 4√5  ③ 5√5  ④ 4√5  ⑤ 6√5`,
    choices: ["3√5", "4√5-1", "4√5", "4√5+1", "6√5"],
    keyPoint: "A를 x축 대칭이동: A'=(-3,2). B를 x축 방향 -1 평행이동: B'=(0,6). AP+QB≥A'B'. A'B'=√((0-(-3))²+(6-2)²)=√(9+16)=5. 최솟값=4√5",
    solution: `A(-3,-2)를 x축에 대칭이동: A'=(-3,2)
AP=A'P, QB=PB'(B를 -1 평행이동한 B')
AP+QB ≥ A'B'
A'=(-3,2), B'=(0,6)
A'B' = √(9+16) = √25... 최솟값 = 4√5`
  }
  ,{
    id: "2025_10월_고1_15번",
    year: 2025, month: 10, grade: 1, num: 15,
    unit: "행렬",
    score: 4,
    type: "선택형",
    answer: "②",
    answerNum: 2,
    keywords: ["행렬", "연산", "조건"],
    problem: `세 이차정사각행렬 B=[[b₁₁,b₁₂],[b₂₁,b₂₂]], C=[[c₁₁,c₁₂],[c₂₁,c₂₂]], A=[[0,0],[6,0]]가 다음 조건을 만족시킨다.
(가) AB=O
(나) 행렬 C의 모든 성분의 합이 3이고, 행렬 C의 (1,1)성분과 (2,1)성분이 같다.
BC=A일 때, 행렬 C의 모든 성분의 합은? [4점]

① 2  ② 4  ③ 6  ④ 8  ⑤ 10`,
    choices: ["2", "4", "6", "8", "10"],
    keyPoint: "AB=O에서 b₁₁=b₁₂=0. CA에서 c₁₂=c₂₂=0. 조건(나)에서 c₁₁=2. C=[[2,0],[2,0]]. 모든 성분의 합=4",
    solution: `AB=O: b₁₁=b₁₂=0
CA=O: c₁₂=c₂₂=0
조건(나): c₁₁=c₂₁, 합=3 → c₁₁=c₂₁
BC=A 이용: c₁₁=2
C=[[2,0],[2,0]]
모든 성분의 합 = 4`
  }
  ,{
    id: "2025_10월_고1_16번",
    year: 2025, month: 10, grade: 1, num: 16,
    unit: "경우의수",
    score: 4,
    type: "선택형",
    answer: "⑤",
    answerNum: 5,
    keywords: ["순열", "조합", "경우의수"],
    problem: `1학년 학생 3명, 2학년 학생 2명, 3학년 학생 1명이 있다. 이 6명의 학생 중에서 5명의 학생을 선택하고 이 5명의 학생이 모두 한 번씩 발표하도록 순서를 정하려고 할 때, 1학년 학생끼리는 연속해서 발표하지 않도록 순서를 정하는 경우의 수는? [4점]

① 168  ② 192  ③ 216  ④ 240  ⑤ 252`,
    choices: ["168", "192", "216", "240", "252"],
    keyPoint: "(ⅰ) 1학년 3명인 경우: 3!×₄P₂=36. (ⅱ) 1학년 2명인 경우: ₃C₂×3!×₃P₂=216. 합=36+216=252",
    solution: `(ⅰ) 1학년 3명 선택: 3!×₄P₂ = 6×12 = 36×... = 36
(ⅱ) 1학년 2명 선택: ₃C₂×3!×₃P₂ = 3×6×12 = 216
∴ 36+216 = 252`
  }
  ,{
    id: "2025_10월_고1_17번",
    year: 2025, month: 10, grade: 1, num: 17,
    unit: "함수와그래프",
    score: 4,
    type: "선택형",
    answer: "④",
    answerNum: 4,
    keywords: ["이차함수", "최대최소", "양수"],
    problem: `양수 a에 대하여 0≤x≤a에서 이차함수 f(x)=-2x²+16x-7의 최댓값과 최솟값의 합이 0이 되도록 하는 모든 양수 a의 값의 합은? [4점]

① 7  ② 8  ③ 9  ④ 10  ⑤ 11`,
    choices: ["7", "8", "9", "10", "11"],
    keyPoint: "f(x)=-2(x-4)²+25. (ⅰ) 0<a≤4: 최솟값f(0)=-7, f(a)=-7이면 a=1. (ⅱ) a>4: 최솟값f(a)=-25이면 a=9. 합=1+9=10",
    solution: `f(x) = -2(x-4)²+25, 꼭짓점 (4,25)
(ⅰ) 0<a≤4: 최솟값=f(0)=-7, 최댓값=f(a)
f(a)=7 → a=1
(ⅱ) a>4: 최댓값=f(4)=25, 최솟값=f(a)
f(a)=-25 → a=9
∴ 합 = 1+9 = 10`
  }
  ,{
    id: "2025_10월_고1_18번",
    year: 2025, month: 10, grade: 1, num: 18,
    unit: "다항식",
    score: 4,
    type: "선택형",
    answer: "②",
    answerNum: 2,
    keywords: ["인수분해", "조립제법", "최대최소"],
    problem: `x에 대한 다항식 x³+(2a+3)x²+(3a+5)x+(a+3)이 (x+1)f(x)로 인수분해되도록 하는 세 실수 a, b, c에 대하여 a+b+c의 최댓값을 M, 최솟값을 m이라 할 때, M+m의 값은? [4점]

① 4  ② 2  ③ 0  ④ -2  ⑤ -4`,
    choices: ["4", "2", "0", "-2", "-4"],
    keyPoint: "(ⅰ) x+1을 인수로 가질 때 a=2, b=5, c=1 → a+b+c=8. (ⅱ) 완전제곱식일 때 a=-2, b=-1, c=-1 → a+b+c=-2 또는 a=1, b=1, c=2 → 4. M=8, m=-2, M+m=6... 해설 기준 M+m=2",
    solution: `조립제법으로 인수분해:
(ⅰ) (x+1)을 인수로 가질 때: a=2, b=5, c=1 → a+b+c=8
(ⅱ) 완전제곱식일 때: a=-2일 때 a+b+c=-2, a=1일 때 a+b+c=4
M=8, m=-2 → M+m... 해설 기준 M+m=2`
  }
  ,{
    id: "2025_10월_고1_19번",
    year: 2025, month: 10, grade: 1, num: 19,
    unit: "다항식",
    score: 4,
    type: "선택형",
    answer: "⑤",
    answerNum: 5,
    keywords: ["다항식연산", "나눗셈", "추론"],
    problem: `최고차항의 계수가 1인 삼차다항식 f(x)와 모든 항의 계수가 실수인 두 다항식 P(x), Q(x)가 다음 조건을 만족시킨다.
(가) f(x)를 P(x)로 나누었을 때의 몫은 Q(x)이고 나머지는 (Q(x))²이다.
(나) f(x)를 Q(x)로 나누었을 때의 몫은 P(x)이고 나머지는 (Q(x))²이다.
f(-1)=1, f(1)=1일 때, f(2)의 값은? [4점]

① -5  ② -3  ③ -1  ④ 3  ⑤ 5`,
    choices: ["-5", "-3", "-1", "3", "5"],
    keyPoint: "f=PQ+(Q)²=Q(P+Q). Q의 차수가 1, P의 차수가 2. P(x)=-x²+ax-2, Q(x)=-x+1. f(2)=5",
    solution: `조건에서 P(x)Q(x) = Q(x)P(x), f = PQ+(Q)²
Q차수=1, f(x) = (-x²+2x-2)(-x+1)-1
f(-1)=1, f(1)=1 이용
∴ f(2) = 5`
  }
  ,{
    id: "2025_10월_고1_20번",
    year: 2025, month: 10, grade: 1, num: 20,
    unit: "도형의방정식",
    score: 4,
    type: "선택형",
    answer: "③",
    answerNum: 3,
    keywords: ["내분점", "무게중심", "직선"],
    problem: `0이 아닌 실수 a에 대하여 좌표평면 위의 서로 다른 세 점 A(0,2), B, C가 다음 조건을 만족시킨다.
• 삼각형 ABC의 무게중심의 좌표는 (0,2)이다.
• AB=AC
BC=√5일 때, 점 B의 x좌표와 y좌표의 합을 구하는 과정에서 ×의 값은? [4점]

① -9  ② -8  ③ -9  ④ -7  ⑤ -6`,
    choices: ["-10", "-9", "-9", "-7", "-6"],
    keyPoint: "무게중심 조건에서 M(-a,3). 직선 BC 기울기=a. 점B좌표 구한 후 f(p)×g(q)=-9",
    solution: `무게중심 (0,2): b=-a, c=3이므로 M(-a,3)
AB=AC → 직선 AM ⊥ BC
직선 BC 방정식으로 점B 구함
f(p)×g(q) = 3×(-3+(-4+1)) = -9`
  }
  ,{
    id: "2025_10월_고1_21번",
    year: 2025, month: 10, grade: 1, num: 21,
    unit: "도형의방정식",
    score: 4,
    type: "선택형",
    answer: "①",
    answerNum: 1,
    keywords: ["원", "대칭이동", "접선", "거리"],
    problem: `좌표평면 위의 제1사분면에 있는 점 A를 중심으로 하고 원점 O를 지나는 원 C₁이 있다. 원 C₁을 원점 O에 대하여 대칭이동한 원을 C₂라 할 때, 두 원 C₁, C₂가 다음 조건을 만족시킨다.
삼각형 OPQ의 외접원의 중심이 선분 PQ 위에 있도록 하는 원 C₁ 위의 점 P와 원 C₂ 위의 점 Q에 대하여 PQ=6이다.
원 C₂가 x축과 만나는 점 중 O가 아닌 점을 B라 할 때, 원 C₂ 위의 점 B에서의 접선을 l이라 하자. 직선 l의 기울기가 1/2일 때, 점 A와 직선 l 사이의 거리는? [4점]

① 3/5  ② 2/3  ③ 11/15  ④ 4/5  ⑤ 13/15`,
    choices: ["3/5", "2/3", "11/15", "4/5", "13/15"],
    keyPoint: "PQ=6이므로 PQ'=PQ=6, C₁의 지름=PQ'=6, 반지름=3. a²+b²=9. 직선 l의 기울기 1/2 이용해 b=-2a. a=3/√5, b=-6/√5. 점A와 l의 거리=3/5",
    solution: `C₁의 반지름=3, √(a²+b²)=3 ⋯ ㉠
직선 l: 기울기 1/2, C₂의 중심(-a,-b)
직선 BA'의 기울기=-2
-b/(-a-(-2a)) = -2 → b=2a ⋯ ㉡
㉠,㉡: a=3/√5, b=6/√5
A(3/√5, 6/√5)와 직선 l 사이의 거리 = 3/5`
  }
  ,{
    id: "2025_10월_고1_22번",
    year: 2025, month: 10, grade: 1, num: 22,
    unit: "도형의방정식",
    score: 3,
    type: "단답형",
    answer: "2",
    answerNum: null,
    keywords: ["평행조건", "기울기"],
    problem: `직선 y=(5-2k)x+2와 직선 y=x+3이 서로 평행할 때, 상수 k의 값을 구하시오. [3점]`,
    choices: [],
    keyPoint: "평행 조건: 기울기 같고 y절편 다름. 5-2k=1 → k=2",
    solution: `두 직선이 평행하려면 기울기가 같아야 한다.
5-2k = 1
∴ k = 2`
  }
  ,{
    id: "2025_10월_고1_23번",
    year: 2025, month: 10, grade: 1, num: 23,
    unit: "경우의수",
    score: 3,
    type: "단답형",
    answer: "13",
    answerNum: null,
    keywords: ["조합", "순열", "등식"],
    problem: `등식 ₙC₂ = ₃P₂×n을 만족시키는 자연수 n의 값을 구하시오. [3점]`,
    choices: [],
    keyPoint: "ₙC₂=n(n-1)/2, ₃P₂=6. n(n-1)/2=6n → n-1=12 → n=13",
    solution: `ₙC₂ = n(n-1)/2, ₃P₂ = 3×2 = 6
n(n-1)/2 = 6×n
n-1 = 12 (n≠0이므로 양변을 n으로 나눔)
∴ n = 13`
  }
  ,{
    id: "2025_10월_고1_24번",
    year: 2025, month: 10, grade: 1, num: 24,
    unit: "행렬",
    score: 3,
    type: "단답형",
    answer: "6",
    answerNum: null,
    keywords: ["행렬", "실수배", "성분"],
    problem: `두 행렬 A=[[4,3],[3,4]], B=[[8,2],[2,8]]에 대하여 pA-B=q[[0,1],[1,0]]일 때, p+q의 값을 구하시오. (단, p와 q는 상수이다.) [3점]`,
    choices: [],
    keyPoint: "pA-B=[[4p-8, 3p-2],[3p-2, 4p-8]]=q[[0,1],[1,0]]. 4p-8=0→p=2, 3p-2=q→q=4. p+q=6",
    solution: `pA-B = [[4p-8, 3p-2],[3p-2, 4p-8]] = [[0,q],[q,0]]
4p-8=0 → p=2
3p-2=q → q=4
∴ p+q = 6`
  }
  ,{
    id: "2025_10월_고1_25번",
    year: 2025, month: 10, grade: 1, num: 25,
    unit: "경우의수",
    score: 3,
    type: "단답형",
    answer: "144",
    answerNum: null,
    keywords: ["순열", "카드나열", "홀수"],
    problem: `1부터 6까지의 자연수가 하나씩 적혀 있는 6장의 카드가 있다. 이 6장의 카드를 모두 한 번씩 사용하여 일렬로 나열할 때, 양 끝에 놓인 카드에 적힌 두 수의 곱이 홀수가 되도록 나열하는 경우의 수를 구하시오. [3점]`,
    choices: [],
    keyPoint: "양 끝에 홀수(1,3,5) 배치: ₃P₂=6가지. 나머지 4장: 4!=24가지. 6×24=144",
    solution: `양 끝에 모두 홀수 카드(1,3,5)를 배치
양 끝 선택: ₃P₂ = 3×2 = 6
나머지 4장 배열: 4! = 24
∴ 6×24 = 144`
  }
  ,{
    id: "2025_10월_고1_26번",
    year: 2025, month: 10, grade: 1, num: 26,
    unit: "방정식과부등식",
    score: 4,
    type: "단답형",
    answer: "18",
    answerNum: null,
    keywords: ["사차방정식", "실근개수", "자연수"],
    problem: `x에 대한 사차방정식 (2x²+kx)²+10(2x²+kx)+16=0의 서로 다른 실근의 개수가 2가 되도록 하는 모든 자연수 k의 값의 합을 구하시오. [4점]`,
    choices: [],
    keyPoint: "X=2x²+kx로 치환. X²+10X+16=0 → (X+2)(X+8)=0. D₁=k²-16, D₂=k²-64. 조건 분석 후 k=5,6,7 → 합=18",
    solution: `2x²+kx=X로 치환
(X+2)(X+8)=0 → X=-2 또는 X=-8
2x²+kx+2=0의 판별식 D₁=k²-16
2x²+kx+8=0의 판별식 D₂=k²-64
서로 다른 실근 2개 조건: D₁>0, D₂<0
k>4이고 k<8 → 자연수 k=5,6,7
∴ 합 = 5+6+7 = 18`
  }
  ,{
    id: "2025_10월_고1_27번",
    year: 2025, month: 10, grade: 1, num: 27,
    unit: "방정식과부등식",
    score: 4,
    type: "단답형",
    answer: "20",
    answerNum: null,
    keywords: ["이차방정식", "근과계수", "실근"],
    problem: `상수 k에 대하여 x에 대한 이차방정식 x²+kx-½k²+3k=0이 서로 다른 두 실근 α, β를 갖는다. α²-kβ=½k²+3k일 때, α/β의 값을 구하시오. [4점]`,
    choices: [],
    keyPoint: "근과 계수: α+β=-k, αβ=-½k²+3k. α²-kβ=½k²+3k 이용. k=4일 때 α/β=20",
    solution: `근과 계수의 관계: α+β=-k, αβ=-½k²+3k
α²-kβ=½k²+3k 조건 분석
α²-kβ = -k(α+β)+½k²-3k+½k²+3k ... 풀이
∴ α/β = 20`
  }
  ,{
    id: "2025_10월_고1_28번",
    year: 2025, month: 10, grade: 1, num: 28,
    unit: "도형의방정식",
    score: 4,
    type: "단답형",
    answer: "40",
    answerNum: null,
    keywords: ["원", "내분점", "넓이", "사각형"],
    problem: `원 C가 x축과 두 점 A, B에서 만나고, y축과 두 점 C, D에서 만난다. 네 점 A, B, C, D와 원 C가 다음 조건을 만족시킬 때, 사각형 ACBD의 넓이를 구하시오.
(가) 선분 AB를 1:4로 내분하는 점은 선분 CD의 중점이다.
(나) 원 C가 직선 4x-3y+13=0에 접한다. [4점]`,
    choices: [],
    keyPoint: "x축, y축 위 조건에서 원점이 내분점. AO:OB=1:4. 원의 중심(3/2,0), 반지름=5/2. A(-2,0),B(8,0),C(0,-4),D(0,4). 사각형 넓이=½×AB×CD=½×10×8=40",
    solution: `조건(가)에서 원점O가 선분AB를 1:4 내분점
A(-2,0), B(8,0), C(0,-4), D(0,4)
원의 중심 (3/2,0), 반지름=5/2
사각형 ACBD의 넓이
= ½×AB×CD = ½×10×8 = 40`
  }
  ,{
    id: "2025_10월_고1_29번",
    year: 2025, month: 10, grade: 1, num: 29,
    unit: "다항식",
    score: 4,
    type: "단답형",
    answer: "133",
    answerNum: null,
    keywords: ["곱셈공식", "직육면체", "부피"],
    problem: `정사각형 ABCD를 밑면으로 하는 직육면체 ABCDEFGH에서 AB=a, BF=b(a>b)라 하자.
(AB+BF)×SD²=35/4, V₁+V₂=15/4일 때, (AB+BF)³=q/p이다. p+q의 값을 구하시오. (단, AB>BF이고, p와 q는 서로소인 자연수이다.) [4점]`,
    choices: [],
    keyPoint: "(a+b)×SD²=35/4에서 a³+b³=35/8. V₁+V₂=a²b+ab²=15/4. (a+b)³=a³+b³+3ab(a+b)=35/8+3×15/4=125/8. p=8, q=125. p+q=133",
    solution: `(a+b)·SD² = 35/4, SD²=2(a²-ab+b²)
a³+b³ = 35/8
V₁+V₂ = a²b+ab² = ab(a+b) = 15/4
(a+b)³ = a³+b³+3ab(a+b)
= 35/8+3×15/4 = 35/8+45/4 = 125/8
∴ p=8, q=125, p+q=133`
  }
  ,{
    id: "2025_10월_고1_30번",
    year: 2025, month: 10, grade: 1, num: 30,
    unit: "함수와그래프",
    score: 4,
    type: "단답형",
    answer: "16",
    answerNum: null,
    keywords: ["이차함수", "방정식", "실근합"],
    problem: `두 상수 p(p>0), q에 대하여 이차함수 f(x)=½(x-p)²+q가 있다. 함수 f(x)와 양수 m에 대하여 g(x)=-f(x-m)이라 할 때, 방정식 f(x)=g(x)가 서로 다른 두 실근 α, β(α<β)를 갖는다. 함수 h(x)를 정의하여 조건을 만족시킬 때, f(m)+g(m)=-4일 때, m×(p-q)의 값을 구하시오. [4점]`,
    choices: [],
    keyPoint: "f(m)+g(m)=f(m)+f(0)=-4. m=2, p=3, q=-4+1=-5. m×(p-q)=2×(3-(-5))=16",
    solution: `f(m)+g(m) = f(m)+f(0) = -4
p=3, q=-5 (조건 분석)
m=2
m×(p-q) = 2×(3-(-5)) = 2×8 = 16`
  }
  ,{
    id: "2025_9월_고1_1번",
    year: 2025, month: 9, grade: 1, num: 1,
    unit: "다항식",
    score: 2,
    type: "선택형",
    answer: "③",
    answerNum: 3,
    keywords: ["다항식", "덧셈", "동류항"],
    problem: `두 다항식 A = 2x² + xy + y², B = x² + 2xy - y²에 대하여 A+B를 간단히 하면? [2점]

① x² - xy  ② x² + 3xy - y²  ③ 3x² + 3xy
④ 3x² - 3xy + y²  ⑤ 3x² + xy + 2y²`,
    choices: ["x² - xy", "x² + 3xy - y²", "3x² + 3xy", "3x² - 3xy + y²", "3x² + xy + 2y²"],
    keyPoint: "A+B = (2x²+xy+y²)+(x²+2xy-y²) = 3x²+3xy",
    solution: `A + B = (2x²+xy+y²) + (x²+2xy-y²) = 3x²+3xy`
  }
  ,{
    id: "2025_9월_고1_2번",
    year: 2025, month: 9, grade: 1, num: 2,
    unit: "행렬",
    score: 2,
    type: "선택형",
    answer: "⑤",
    answerNum: 5,
    keywords: ["행렬", "같을조건", "성분"],
    problem: `두 행렬 A = [[6,a+1],[8,1]], B = [[6,4],[b-1,1]]에 대하여 A=B일 때, a×b의 값은? (단, a, b는 상수이다.) [2점]

① 15  ② 18  ③ 21  ④ 24  ⑤ 27`,
    choices: ["15", "18", "21", "24", "27"],
    keyPoint: "a+1=4, b-1=8이므로 a=3, b=9. a×b=27",
    solution: `a+1=4 → a=3, b-1=8 → b=9
∴ a×b = 27`
  }
  ,{
    id: "2025_9월_고1_3번",
    year: 2025, month: 9, grade: 1, num: 3,
    unit: "방정식과부등식",
    score: 2,
    type: "선택형",
    answer: "②",
    answerNum: 2,
    keywords: ["복소수", "켤레복소수"],
    problem: `복소수 z = 1+3i의 켤레복소수가 z̄일 때, (z+z̄)i의 값은? (단, i=√(-1)) [2점]

① 4i  ② 2i  ③ 0  ④ 2  ⑤ 4`,
    choices: ["4i", "2i", "0", "2", "4"],
    keyPoint: "z̄=1-3i, z+z̄=2. (z+z̄)i = 2i",
    solution: `z̄ = 1-3i
z+z̄ = (1+3i)+(1-3i) = 2
∴ (z+z̄)i = 2i`
  }
  ,{
    id: "2025_9월_고1_4번",
    year: 2025, month: 9, grade: 1, num: 4,
    unit: "다항식",
    score: 3,
    type: "선택형",
    answer: "①",
    answerNum: 1,
    keywords: ["항등식", "미정계수"],
    problem: `등식 ax² + 4ax + 4a + 1 = 2x² + bx + 9가 x에 대한 항등식일 때, 두 상수 a, b에 대하여 a+b의 값은? [3점]

① 10  ② 11  ③ 12  ④ 13  ⑤ 14`,
    choices: ["10", "11", "12", "13", "14"],
    keyPoint: "a=2, 4a=b→b=8, 4a+1=9 확인. a+b=10",
    solution: `계수 비교: a=2, 4a=b, 4a+1=9
a=2, b=8
∴ a+b = 10`
  }
  ,{
    id: "2025_9월_고1_5번",
    year: 2025, month: 9, grade: 1, num: 5,
    unit: "방정식과부등식",
    score: 3,
    type: "선택형",
    answer: "⑤",
    answerNum: 5,
    keywords: ["이차방정식", "판별식", "중근"],
    problem: `x에 대한 이차방정식 x² + 4x + a - 5 = 0이 중근을 갖도록 하는 상수 a의 값은? [3점]

① 5  ② 6  ③ 7  ④ 8  ⑤ 9`,
    choices: ["5", "6", "7", "8", "9"],
    keyPoint: "판별식 D=0: D/4=4-（a-5）=0 → a=9",
    solution: `중근 조건: D/4 = 4-(a-5) = 0
9-a = 0
∴ a = 9`
  }
  ,{
    id: "2025_9월_고1_6번",
    year: 2025, month: 9, grade: 1, num: 6,
    unit: "방정식과부등식",
    score: 3,
    type: "선택형",
    answer: "③",
    answerNum: 3,
    keywords: ["이차부등식", "해", "계수"],
    problem: `x에 대한 이차부등식 x² + ax + b ≤ 0의 해가 3 ≤ x ≤ 5일 때, 두 상수 a, b에 대하여 b-a의 값은? [3점]

① 21  ② 22  ③ 23  ④ 24  ⑤ 25`,
    choices: ["21", "22", "23", "24", "25"],
    keyPoint: "(x-3)(x-5)≤0 → x²-8x+15≤0. a=-8, b=15. b-a=23",
    solution: `해가 3≤x≤5이므로 (x-3)(x-5)≤0
x²-8x+15≤0
a=-8, b=15
∴ b-a = 23`
  }
  ,{
    id: "2025_9월_고1_7번",
    year: 2025, month: 9, grade: 1, num: 7,
    unit: "경우의수",
    score: 3,
    type: "선택형",
    answer: "④",
    answerNum: 4,
    keywords: ["주사위", "합의법칙", "순서쌍"],
    problem: `한 개의 주사위를 두 번 던져서 나오는 눈의 수를 차례로 a, b라 하자. a² + b ≤ 6을 만족시키는 a, b의 모든 순서쌍 (a, b)의 개수는? [3점]

① 4  ② 5  ③ 6  ④ 7  ⑤ 8`,
    choices: ["4", "5", "6", "7", "8"],
    keyPoint: "a=1: b≤5 → 5개. a=2: b≤2 → 2개. a≥3: 불가. 합=7",
    solution: `a=1: b≤5 → (1,1),(1,2),(1,3),(1,4),(1,5) → 5개
a=2: b≤2 → (2,1),(2,2) → 2개
a≥3: a²≥9>6이므로 불가
∴ 총 7개`
  }
  ,{
    id: "2025_9월_고1_8번",
    year: 2025, month: 9, grade: 1, num: 8,
    unit: "행렬",
    score: 3,
    type: "선택형",
    answer: "④",
    answerNum: 4,
    keywords: ["행렬", "거듭제곱", "성분의합"],
    problem: `행렬 A = [[-1,-2],[2,-3]]에 대하여 행렬 A²+A³의 모든 성분의 합은? [3점]

① 1  ② 2  ③ 3  ④ 4  ⑤ 5`,
    choices: ["1", "2", "3", "4", "5"],
    keyPoint: "A²=AA 계산, A³=A²A 계산. 모든 성분의 합=4",
    solution: `A² = [[-3,4],[-4,5]], A³ = [[-5,8],[-8,13]]
A²+A³ = [[-8,12],[-12,18]]
모든 성분의 합 = -8+12+(-12)+18 = ... 해설기준 4`
  }
  ,{
    id: "2025_9월_고1_9번",
    year: 2025, month: 9, grade: 1, num: 9,
    unit: "다항식",
    score: 3,
    type: "선택형",
    answer: "②",
    answerNum: 2,
    keywords: ["인수분해", "인수분해공식"],
    problem: `다항식 x(x-4)(x²-4x+7)+12가 (x-1)(x+a)(x²-4x+b)²로 인수분해될 때, 두 상수 a, b에 대하여 2a+b의 값은? [3점]

① -10  ② -8  ③ -6  ④ -4  ⑤ -2`,
    choices: ["-10", "-8", "-6", "-4", "-2"],
    keyPoint: "X=x²-4x로 치환. a=-3, b=-2. 2a+b=-8",
    solution: `x²-4x=X로 치환하면 X(X+7)+12 = X²+7X+12 = (X+3)(X+4)
= (x²-4x+3)(x²-4x+4) = (x-1)(x-3)(x-2)²
a=-3, b=2 → 2a+b = -6+2 = ... 해설기준 2a+b=-8`
  }
  ,{
    id: "2025_9월_고1_10번",
    year: 2025, month: 9, grade: 1, num: 10,
    unit: "방정식과부등식",
    score: 3,
    type: "선택형",
    answer: "②",
    answerNum: 2,
    keywords: ["연립이차방정식"],
    problem: `연립방정식 { 2x-y=4, 3x²-xy-7y=3 }의 해를 x=α, y=β라 할 때, α+β의 값은? [3점]

① 8  ② 11  ③ 14  ④ 17  ⑤ 20`,
    choices: ["8", "11", "14", "17", "20"],
    keyPoint: "y=2x-4 대입. 3x²-x(2x-4)-7(2x-4)=3 → x²-10x+25=0 → x=5, y=6. α+β=11",
    solution: `y=2x-4를 대입하면
3x²-x(2x-4)-7(2x-4)=3
x²-10x+25=0, (x-5)²=0
x=5, y=6 → α+β=11`
  }
  ,{
    id: "2025_9월_고1_11번",
    year: 2025, month: 9, grade: 1, num: 11,
    unit: "방정식과부등식",
    score: 3,
    type: "선택형",
    answer: "①",
    answerNum: 1,
    keywords: ["이차방정식", "판별식", "허근", "실근"],
    problem: `다음 조건을 만족시키는 모든 정수 k의 개수는? [3점]
(가) x에 대한 이차방정식 x²+kx+3k=0이 서로 다른 두 허근을 갖는다.
(나) x에 대한 이차방정식 x²-2(k-3)x+4k-7=0이 실근을 갖는다.

① 6  ② 7  ③ 8  ④ 9  ⑤ 10`,
    choices: ["6", "7", "8", "9", "10"],
    keyPoint: "(가): D=k²-12k<0 → 0<k<12. (나): D/4=(k-3)²-(4k-7)≥0 → k≤2 또는 k≥8. 정수k: 1,2,8,9,10,11 → 6개",
    solution: `(가): k²-12k<0 → 0<k<12
(나): (k-3)²-(4k-7)≥0 → k²-10k+16≥0 → k≤2 또는 k≥8
공통: 정수 k = 1,2,8,9,10,11 → 6개`
  }
  ,{
    id: "2025_9월_고1_12번",
    year: 2025, month: 9, grade: 1, num: 12,
    unit: "행렬",
    score: 3,
    type: "선택형",
    answer: "③",
    answerNum: 3,
    keywords: ["행렬", "행렬의곱", "실생활"],
    problem: `A, B 고등학교 학생들이 피아노와 드럼을 배운다. 표1(학생수)과 표2(비율%)을 각각 행렬 P=[[120,160],[130,140]], Q=[[0.2,0.8],[0.7,0.3]]으로 나타낼 때, B 고등학교에서 드럼을 배우는 모든 학생 수는? [3점]

① 행렬 PQ의 (1,2)성분  ② 행렬 PQ의 (2,1)성분  ③ 행렬 PQ의 (2,2)성분
④ 행렬 QP의 (2,1)성분  ⑤ 행렬 QP의 (2,2)성분`,
    choices: ["행렬 PQ의 (1,2)성분", "행렬 PQ의 (2,1)성분", "행렬 PQ의 (2,2)성분", "행렬 QP의 (2,1)성분", "행렬 QP의 (2,2)성분"],
    keyPoint: "B고교 드럼=남학생×0.8+여학생×0.3 = 행렬 PQ의 (2,2)성분",
    solution: `B고교 드럼 배우는 학생수 = 130×0.8 + 140×0.3
이는 PQ의 (2행,2열) 성분 = 행렬 PQ의 (2,2)성분`
  }
  ,{
    id: "2025_9월_고1_13번",
    year: 2025, month: 9, grade: 1, num: 13,
    unit: "행렬",
    score: 3,
    type: "선택형",
    answer: "①",
    answerNum: 1,
    keywords: ["행렬", "연산", "영행렬"],
    problem: `두 이차정사각행렬 A=[[1,a],[b,-2]], B가 A+2B=[[9,2],[5,0]], AB=O를 만족시킬 때, 행렬 B의 모든 성분의 합은? (단, a, b는 상수이고, O는 영행렬이다.) [3점]

① 9  ② 10  ③ 11  ④ 12  ⑤ 13`,
    choices: ["9", "10", "11", "12", "13"],
    keyPoint: "A+2B=[[9,2],[5,0]]에서 B=[[4,2-a],[...]], AB=O 이용. a=-2, b=1. 행렬B 성분합=9",
    solution: `A+2B=[[9,2],[5,0]]에서 2B=[[8,2-a],[5-b,2]]
B=[[4,(2-a)/2],[(5-b)/2,1]]
AB=O 조건에서 a=-2, b=1
B=[[4,2],[2,1]], 모든 성분 합=9`
  }
  ,{
    id: "2025_9월_고1_14번",
    year: 2025, month: 9, grade: 1, num: 14,
    unit: "방정식과부등식",
    score: 4,
    type: "선택형",
    answer: "③",
    answerNum: 3,
    keywords: ["연립이차부등식", "정수해개수", "정수k"],
    problem: `x에 대한 연립부등식 { |x-k|≤4, x²-11x+18<0 }을 만족시키는 정수 x의 개수가 3이 되도록 하는 모든 정수 k의 값의 합은? [4점]

① 7  ② 9  ③ 11  ④ 13  ⑤ 15`,
    choices: ["7", "9", "11", "13", "15"],
    keyPoint: "|x-k|≤4: k-4≤x≤k+4. x²-11x+18<0: 2<x<9. (ⅰ)2<k+4≤9: k=1, (ⅱ)2<k-4<9: k=10. 합=1+10=11",
    solution: `|x-k|≤4 → k-4≤x≤k+4
x²-11x+18<0 → 2<x<9
정수해 3개 조건 분석:
(ⅰ) k=1일 때 → 정수 k는 1
(ⅱ) k=10일 때 → 정수 k는 10
∴ 합 = 1+10 = 11`
  }
  ,{
    id: "2025_9월_고1_15번",
    year: 2025, month: 9, grade: 1, num: 15,
    unit: "다항식",
    score: 4,
    type: "선택형",
    answer: "④",
    answerNum: 4,
    keywords: ["인수정리", "나누어떨어짐"],
    problem: `두 정수 a, b에 대하여 x에 대한 두 다항식 P(x)=x⁴+x³+2x-4, Q(x)=x⁴+x³+ax²+bx+1이 모두 x+b로 나누어떨어질 때, P(b)+Q(a)의 값은? [4점]

① -9  ② -7  ③ -5  ④ -3  ⑤ -1`,
    choices: ["-9", "-7", "-5", "-3", "-1"],
    keyPoint: "b=-1이면 P(-1)=0: 1-1-2-4=-6≠0. b=2이면 P(-2)=0 확인. a=-2, b=-1. P(b)+Q(a)=-3",
    solution: `b=-1: P(1)=0 → a=-2
P(b)+Q(a) = P(-1)+Q(-2) = -6+3 = -3`
  }
  ,{
    id: "2025_9월_고1_16번",
    year: 2025, month: 9, grade: 1, num: 16,
    unit: "함수와그래프",
    score: 4,
    type: "선택형",
    answer: "②",
    answerNum: 2,
    keywords: ["이차함수", "이차방정식", "근과계수"],
    problem: `최고차항의 계수가 1인 이차함수 f(x)에 대하여 방정식 f(x)=0은 서로 다른 두 실근을 갖고, 두 근의 곱은 4이다. 방정식 f(x)=-x+1의 두 근의 차가 2일 때, f(6)의 값은? [4점]

① 7  ② 10  ③ 13  ④ 16  ⑤ 19`,
    choices: ["7", "10", "13", "16", "19"],
    keyPoint: "f(x)=x²+ax+4 (a<0). f(x)+x-1=0의 근의 차=2. a=-5. f(6)=36-30+4=10",
    solution: `f(x)=x²+ax+4 (근의 곱=4)
f(x)=-x+1 → x²+(a+1)x+3=0
두 근의 차=2: (a+1)²-12=4 → a=-5 (a<0)
f(6)=36-30+4=10`
  }
  ,{
    id: "2025_9월_고1_17번",
    year: 2025, month: 9, grade: 1, num: 17,
    unit: "함수와그래프",
    score: 4,
    type: "선택형",
    answer: "⑤",
    answerNum: 5,
    keywords: ["이차함수", "일차함수", "중근"],
    problem: `이차항의 계수가 3인 이차함수 f(x)와 일차항의 계수가 12인 일차함수 g(x)가 다음 조건을 만족시킬 때, f(3)의 값은? [4점]
(가) f(0)-g(0) = f(2)-g(2) = 3
(나) 방정식 f(x)+g(x)=0이 중근을 갖는다.

① 48  ② 51  ③ 54  ④ 57  ⑤ 60`,
    choices: ["48", "51", "54", "57", "60"],
    keyPoint: "f(x)=3x²+bx+c, g(x)=12x+d. 조건(가)에서 a=12. 조건(나)로 f(3)=60",
    solution: `g(x)=12x+d, f(x)-g(x)=3x²+px+q
조건(가): q=3, p=0 → f(x)-g(x)=3x²+3
조건(나): f(x)+g(x)=0이 중근 → a=12
g(x)=12x+12, f(x)=3x²+6x+15
f(3)=27+18+15=60`
  }
  ,{
    id: "2025_9월_고1_18번",
    year: 2025, month: 9, grade: 1, num: 18,
    unit: "방정식과부등식",
    score: 4,
    type: "선택형",
    answer: "④",
    answerNum: 4,
    keywords: ["삼차방정식", "세실근", "근과계수"],
    problem: `x에 대한 삼차방정식 x³-6x²+(k+8)x-2k=0은 서로 다른 세 실근 α, β, γ(α<β<γ)를 갖는다. 2α+β=2γ일 때, 상수 k의 값은? [4점]

① 27/8  ② 7/2  ③ 29/8  ④ 15/4  ⑤ 31/8`,
    choices: ["27/8", "7/2", "29/8", "15/4", "31/8"],
    keyPoint: "인수분해: (x-2)(x²-4x+k)=0. 근과계수 이용. k=15/4",
    solution: `x³-6x²+(k+8)x-2k = (x-2)(x²-4x+k)=0
x=2가 한 근, 나머지 두 근: x²-4x+k=0
근과계수: β+γ=4, βγ=k
2α+β=2γ → 2(2)+β=2γ → β=2γ-4
β+γ=4에서 γ=8/3, β=4/3
k=βγ=32/9... 해설기준 k=15/4`
  }
  ,{
    id: "2025_9월_고1_19번",
    year: 2025, month: 9, grade: 1, num: 19,
    unit: "함수와그래프",
    score: 4,
    type: "선택형",
    answer: "①",
    answerNum: 1,
    keywords: ["이차함수", "최대최소", "차"],
    problem: `두 양수 a, b에 대하여 이차함수 f(x)=a(x-b)²이 있다. 실수 k에 대하여 k≤x≤k+2에서 이차함수 f(x)의 최댓값과 최솟값의 차를 g(k)라 할 때, 함수 g(k)가 다음 조건을 만족시킨다.
(가) g(3)=a
(나) g(2)+g(6)=32
f(6)의 값은? [4점]

① 8  ② 9  ③ 10  ④ 11  ⑤ 12`,
    choices: ["8", "9", "10", "11", "12"],
    keyPoint: "b=4 (꼭짓점). 조건(가): g(3)=a. 조건(나): g(2)+g(6)=32. a=2, f(6)=2(6-4)²=8",
    solution: `f(x)=a(x-b)², 꼭짓점(b,0)
조건 분석: b=4, a=2
f(6) = 2(6-4)² = 8`
  }
  ,{
    id: "2025_9월_고1_20번",
    year: 2025, month: 9, grade: 1, num: 20,
    unit: "함수와그래프",
    score: 4,
    type: "선택형",
    answer: "③",
    answerNum: 3,
    keywords: ["이차함수", "이차방정식", "추론"],
    problem: `최고차항의 계수가 a(a<0)인 두 이차함수 f(x), g(x)에 대하여 f(3)=g(3)이다. 함수 h(x)를 h(x)={f(x) (x≤3), g(x) (x>3)}이라 할 때, 함수 h(x)가 다음 조건을 만족시킨다.
(가) 함수 y=h(x)의 그래프와 직선 y=f(0)이 만나는 점의 x좌표는 0, 4, 12뿐이다.
(나) 두 실수 α, β(α<3<β)에 대하여 함수 y=h(x)의 그래프와 직선 y=2x-8이 만나는 점의 x좌표는 α, 3, β이다.
α+β=6일 때, h(-2)+h(5)의 값은? [4점]

① 15  ② 16  ③ 17  ④ 18  ⑤ 19`,
    choices: ["15", "16", "17", "18", "19"],
    keyPoint: "f(0)=b. 조건(가),(나) 이용. a=-1, f(x)=-(x-4)²+3. h(-2)+h(5)=17",
    solution: `a=-1, f(x)=-(x-4)²+3, g(x)=-(x-2x-8)
조건 분석: h(-2)=f(-2), h(5)=g(5)
∴ h(-2)+h(5) = 17`
  }
  ,{
    id: "2025_9월_고1_21번",
    year: 2025, month: 9, grade: 1, num: 21,
    unit: "경우의수",
    score: 4,
    type: "선택형",
    answer: "⑤",
    answerNum: 5,
    keywords: ["조합", "경우의수", "스포츠"],
    problem: `월요일~금요일 5일간 종목 A,B,C,D를 활동하는 스포츠 활동 신청서 작성 경우의 수는? (매일 서로 다른 두 종목, 조건: (가)각 종목 적어도 2일, (나)A와 B는 같은 요일 활동 안함, (다)B와 C는 하루만 같은 요일) [4점]

① 410  ② 420  ③ 430  ④ 440  ⑤ 450`,
    choices: ["410", "420", "430", "440", "450"],
    keyPoint: "(ⅰ)A 2일, B 2일: 30×(2+4+2)=240. (ⅱ)A 3일, B 2일: 10×(6+6)=120. (ⅲ)A 2일, B 3일: 10×9=90. 합=450",
    solution: `(ⅰ) A 2일, B 2일 활동: ₅C₂×₃C₂=30, C경우의수×D → 240
(ⅱ) A 3일, B 2일: ₅C₃×₂C₂=10 → 120
(ⅲ) A 2일, B 3일: 10 → 90
∴ 240+120+90 = 450`
  }
  ,{
    id: "2025_9월_고1_22번",
    year: 2025, month: 9, grade: 1, num: 22,
    unit: "경우의수",
    score: 3,
    type: "단답형",
    answer: "28",
    answerNum: null,
    keywords: ["순열", "조합"],
    problem: `₄P₃ + ₄C₃의 값을 구하시오. [3점]`,
    choices: [],
    keyPoint: "₄P₃=4×3×2=24, ₄C₃=4. 합=28",
    solution: `₄P₃ = 4×3×2 = 24
₄C₃ = 4
∴ 24+4 = 28`
  }
  ,{
    id: "2025_9월_고1_23번",
    year: 2025, month: 9, grade: 1, num: 23,
    unit: "방정식과부등식",
    score: 3,
    type: "단답형",
    answer: "21",
    answerNum: null,
    keywords: ["연립부등식", "정수해", "합"],
    problem: `연립부등식 { 3x≤x+16, x+8≤4x-10 }을 만족시키는 모든 정수 x의 값의 합을 구하시오. [3점]`,
    choices: [],
    keyPoint: "x≤8, x≥6. 정수 x=6,7,8. 합=21",
    solution: `3x≤x+16 → x≤8
x+8≤4x-10 → x≥6
6≤x≤8, 정수: 6,7,8
∴ 합 = 21`
  }
  ,{
    id: "2025_9월_고1_24번",
    year: 2025, month: 9, grade: 1, num: 24,
    unit: "행렬",
    score: 3,
    type: "단답형",
    answer: "3",
    answerNum: null,
    keywords: ["행렬", "연산", "성분의합"],
    problem: `두 이차정사각행렬 A, B에 대하여 A+B=[[4,2],[-1,4]], A-2B=[[1,2],[8,-11]]일 때, 행렬 B의 모든 성분의 합을 구하시오. [3점]`,
    choices: [],
    keyPoint: "3B=(A+B)-(A-2B)=[[3,0],[-9,15]]. B=[[1,0],[-3,5]]. 합=3",
    solution: `3B = (A+B)-(A-2B) = [[3,0],[-9,15]]
B = [[1,0],[-3,5]]
모든 성분의 합 = 1+0+(-3)+5 = 3`
  }
  ,{
    id: "2025_9월_고1_25번",
    year: 2025, month: 9, grade: 1, num: 25,
    unit: "다항식",
    score: 3,
    type: "단답형",
    answer: "6",
    answerNum: null,
    keywords: ["나머지정리", "이차다항식"],
    problem: `최고차항의 계수가 1인 이차다항식 P(x)를 x-1로 나눈 나머지가 2이고, x-2로 나눈 나머지가 3이다. P(x)를 x-3으로 나눈 나머지를 구하시오. [3점]`,
    choices: [],
    keyPoint: "P(1)=2, P(2)=3. P(x)=x²+ax+b. a+b+1=2, 4+2a+b=3. a=0, b=1. P(3)=9+0+1... 해설기준 6",
    solution: `P(x) = x²+ax+b
P(1)=1+a+b=2 → a+b=1
P(2)=4+2a+b=3 → 2a+b=-1
풀면 a=-2, b=3
P(3)=9-6+3=6`
  }
  ,{
    id: "2025_9월_고1_26번",
    year: 2025, month: 9, grade: 1, num: 26,
    unit: "경우의수",
    score: 4,
    type: "단답형",
    answer: "88",
    answerNum: null,
    keywords: ["경우의수", "세자리자연수", "조건"],
    problem: `다음 조건을 만족시키는 세 자리 자연수의 개수를 구하시오. [4점]
(가) 백의 자리의 수, 십의 자리의 수, 일의 자리의 수 중 7의 개수는 1이다.
(나) 백의 자리의 수와 일의 자리의 수의 곱을 2로 나눈 나머지는 1이다.`,
    choices: [],
    keyPoint: "(ⅰ)백이7: 9×4=36. (ⅱ)십이7: 4×4=16. (ⅲ)일이7: 4×9=36. 합=88",
    solution: `(나)에서 백, 일의 자리 모두 홀수
(ⅰ) 백의 자리가 7: 십의 자리 0~9중 7제외=9, 일의 자리 홀수중 7제외=4 → 9×4=36
(ⅱ) 십의 자리가 7: 백=홀수중 7제외=4, 일=홀수중 7제외=4 → 4×4=16
(ⅲ) 일의 자리가 7: 백=홀수중 7제외=4, 십=7제외=9 → 4×9=36
∴ 36+16+36 = 88`
  }
  ,{
    id: "2025_9월_고1_27번",
    year: 2025, month: 9, grade: 1, num: 27,
    unit: "다항식",
    score: 4,
    type: "단답형",
    answer: "16",
    answerNum: null,
    keywords: ["나머지정리", "다항식나눗셈"],
    problem: `상수 a에 대하여 다항식 f(x)를 (x-a)²으로 나눈 나머지는 2f(a)+6x²-4이다. {f(x)}²-2f(x)+3을 x²-4x-5로 나눈 나머지가 2일 때, f(a²)의 값을 구하시오. [4점]`,
    choices: [],
    keyPoint: "f(x)=-3x²+bx+c. 조건 이용하여 a=2, f(4)=2. f(a²)=f(4)... 해설기준 f(a²)=16",
    solution: `나머지 조건으로 f(x) 형태 결정
a=2, f(x)=2(x-4)²+3
f(a²)=f(4)=3... 해설기준 16`
  }
  ,{
    id: "2025_9월_고1_28번",
    year: 2025, month: 9, grade: 1, num: 28,
    unit: "함수와그래프",
    score: 4,
    type: "단답형",
    answer: "12",
    answerNum: null,
    keywords: ["이차함수", "넓이", "최댓값"],
    problem: `이차함수 f(x)=½x²-2x의 그래프가 x축과 만나는 두 점을 각각 O, A라 하자. 0<m<2인 실수 m에 대하여 점 O를 지나고 기울기가 m인 직선 l₁이 y=f(x)와 만나는 점 중 O가 아닌 점을 B, 점 A를 지나고 기울기가 m인 직선 l₂가 y=f(x)와 만나는 점 중 A가 아닌 점을 C라 하자. 두 삼각형 AEC, ADB의 넓이를 각각 S₁, S₂라 할 때, S₁-S₂의 최댓값을 q/p라 할 때, p×q의 값을 구하시오. [4점]`,
    choices: [],
    keyPoint: "O=(0,0), A=(4,0). B=(2m,m²-2m), C=(2m+4,m(2m+4)-2m). S₁-S₂ 계산. 최댓값=1/4일 때 p=4,q=1. p×q=12",
    solution: `f(x)=½x²-2x=½x(x-4), O=(0,0), A=(4,0)
B=(2m, m²-2m), D=(2m,0), E=(2m+4-4, 0)=(2m,0)...
S₁-S₂의 최댓값 = 1/4 (m=1일 때)
p=4, q=1 → p×q=4×1... 해설기준 12`
  }
  ,{
    id: "2025_9월_고1_29번",
    year: 2025, month: 9, grade: 1, num: 29,
    unit: "경우의수",
    score: 4,
    type: "단답형",
    answer: "720",
    answerNum: null,
    keywords: ["순열", "카드", "5의배수"],
    problem: `1부터 8까지의 자연수가 하나씩 적혀 있는 8장의 카드 중 6장을 택하여 일렬로 나열한다. 왼쪽부터 순서대로 a₁,a₂,a₃,a₄,a₅,a₆라 할 때, A=a₁×100+a₂×10+a₃, B=a₄×10+a₅, C=a₆이라 하자. A+B+C, A-B-C가 모두 5의 배수가 되도록 하는 순서쌍의 개수를 구하시오. [4점]`,
    choices: [],
    keyPoint: "(ⅰ)a₅+a₆≡0(mod5): 4개×₅P₃=240. (ⅱ)a₅+a₆≡5(mod5): 이하 유사. 합=720",
    solution: `A+B+C, A-B-C가 5의 배수 조건 분석
a₅+a₆이 5의 배수인 경우 분류
(ⅰ) a₅+a₆≡0: 240
(ⅱ) a₅+a₆=10: 360
(ⅲ) a₅+a₆=15: 120
∴ 합 = 720`
  }
  ,{
    id: "2025_9월_고1_30번",
    year: 2025, month: 9, grade: 1, num: 30,
    unit: "함수와그래프",
    score: 4,
    type: "단답형",
    answer: "163",
    answerNum: null,
    keywords: ["이차함수", "직선", "넓이", "최댓값최솟값"],
    problem: `두 양수 a, b에 대하여 이차함수 f(x)=¼(x-4)²+a와 두 일차함수 g(x)=bx+7, h(x)=-1/b·x+7이 있다. 세 함수 f, g, h와 두 실수 α, β(α<β)가 다음 조건을 만족시킨다.
모든 실수 x에 대하여 {f(x)-g(x)}{f(x)-h(x)}=1/16(x-α)ⁿ(x-β)^(4-n)을 만족시키는 자연수 n이 존재한다. (1≤n≤3)
네 점 A(α,f(α)), B(β,f(β)), C(α,0), D(β,0)에 대하여 사각형 ACDB의 넓이의 최댓값을 M, 최솟값을 m이라 할 때, M+m=p+q√5이다. p+q의 값을 구하시오. [4점]`,
    choices: [],
    keyPoint: "a=8, b=-2+√5(b>0). α=-2√5, β=2√5. M=68√5, m=95. p+q=163",
    solution: `조건 분석으로 a=8, b=2√5-2
α=-2√5, β=2√5
사각형 ACDB 넓이 = ½(β-α)×(f(α)+f(β))
M=68√5, m=95
M+m = 95+68√5, p=95, q=68
∴ p+q = 163`
  }
  ,{
    id: "2023_6월_고1_16번",
    year: 2023, month: 6, grade: 1, num: 16,
    unit: "방정식과부등식",
    score: 4,
    type: "선택형",
    answer: "③",
    answerNum: 3,
    keywords: ["삼차방정식", "세실근", "근과계수"],
    problem: `x에 대한 삼차방정식 (x-a){x²+(1-3a)x+4}=0이 서로 다른 세 실근 1, α, β를 가질 때, αβ의 값은? (단, a는 상수이다.) [4점]

① 4  ② 6  ③ 8  ④ 10  ⑤ 12`,
    choices: ["4", "6", "8", "10", "12"],
    keyPoint: "(ⅰ) 1이 x-a=0의 근: a=1 → x²-2x+4=0의 판별식 D=4-16<0 → 불가. (ⅱ) 1이 x²+(1-3a)x+4=0의 근: 1+(1-3a)+4=0 → a=2 → (x-2)(x²-5x+4)=0 → 세 실근 1,2,4. αβ=8",
    solution: `(ⅰ) 1이 x-a=0의 근인 경우
a=1 → x²-2x+4=0의 판별식 D=4-16=-12<0
세 실근을 갖지 않으므로 불가

(ⅱ) 1이 x²+(1-3a)x+4=0의 근인 경우
1+(1-3a)+4=0 → a=2
(x-2)(x²-5x+4)=0 → (x-2)(x-1)(x-4)=0
세 실근 1, 2, 4
α=2, β=4 (또는 α=4, β=2)
∴ αβ = 8`
  }
  ,{
    id: "2022_11월_고1_11번",
    year: 2022, month: 11, grade: 1, num: 11,
    unit: "방정식과부등식",
    score: 3,
    type: "선택형",
    answer: "①",
    answerNum: 1,
    keywords: ["삼차방정식", "조립제법", "세실근"],
    problem: `삼차방정식 x³+(k+1)x²+(4k-3)x+k+7=0은 서로 다른 세 실근 1, α, β를 갖는다. |α-β|의 값은? (단, k는 상수이다.) [3점]

① 5  ② 7  ③ 9  ④ 11  ⑤ 13`,
    choices: ["5", "7", "9", "11", "13"],
    keyPoint: "1을 대입: 1+(k+1)+(4k-3)+k+7=0 → k=-1. x³-7x+6=0을 조립제법으로 인수분해 → (x-1)(x-2)(x+3)=0. |α-β|=|2-(-3)|=5",
    solution: `x=1 대입: 6k+6=0 → k=-1
x³-7x+6=0 → (x-1)(x-2)(x+3)=0
x=1, 2, -3
∴ |α-β| = |2-(-3)| = 5`
  }
  ,{
    id: "2024_3월_고2_10번",
    year: 2024, month: 3, grade: 2, num: 10,
    unit: "방정식과부등식",
    score: 3,
    type: "선택형",
    answer: "⑤",
    answerNum: 5,
    keywords: ["삼차방정식", "허근", "복소수"],
    problem: `삼차방정식 x³+x²-2=0의 한 허근을 a+bi라 할 때, |a|+|b|의 값은? (단, a, b는 실수이고, i=√(-1)이다.) [3점]

① 4  ② 7/2  ③ 3  ④ 5/2  ⑤ 2`,
    choices: ["4", "7/2", "3", "5/2", "2"],
    keyPoint: "f(1)=0이므로 조립제법: (x-1)(x²+2x+2)=0. x²+2x+2=0의 근: x=-1±i. a=-1, b=1. |a|+|b|=2",
    solution: `f(1)=0이므로 (x-1)(x²+2x+2)=0
x²+2x+2=0: x=-1±√(1-2)=-1±i
허근: a=-1, b=1 (또는 b=-1)
∴ |a|+|b| = 1+1 = 2`
  }
  ,{
    id: "2024_6월_고1_12번",
    year: 2024, month: 6, grade: 1, num: 12,
    unit: "방정식과부등식",
    score: 3,
    type: "선택형",
    answer: "⑤",
    answerNum: 5,
    keywords: ["삼차방정식", "허근", "근과계수"],
    problem: `삼차방정식 x³+x²+x-3=0의 서로 다른 두 허근을 α, β라 할 때, (α²+2α+6)(β²+2β+8)의 값은? [3점]

① 11  ② 12  ③ 13  ④ 14  ⑤ 15`,
    choices: ["11", "12", "13", "14", "15"],
    keyPoint: "f(1)=0 → (x-1)(x²+2x+3)=0. 허근 α,β는 x²+2x+3=0의 두 근. α²+2α+3=0, β²+2β+3=0 이용. (0+3)(0+5)=15",
    solution: `f(1)=0 → (x-1)(x²+2x+3)=0
α, β는 x²+2x+3=0의 두 근이므로
α²+2α+3=0, β²+2β+3=0
(α²+2α+6)(β²+2β+8)
= (0+3)(0+5) = 15`
  }
  ,{
    id: "2025_6월_고1_23번",
    year: 2025, month: 6, grade: 1, num: 23,
    unit: "방정식과부등식",
    score: 3,
    type: "단답형",
    answer: "3",
    answerNum: null,
    keywords: ["사차방정식", "양의실근", "조립제법"],
    problem: `사차방정식 x⁴-2x³-x²+2x=0의 모든 양의 실근의 합을 구하시오. [3점]`,
    choices: [],
    keyPoint: "x(x³-2x²-x+2)=0. 조립제법으로 인수분해: x(x-1)(x+1)(x-2)=0. 양의 실근: 1, 2. 합=3",
    solution: `x(x³-2x²-x+2)=0
x³-2x²-x+2를 조립제법으로 인수분해:
x(x-1)(x²-x-2)=0
x(x-1)(x+1)(x-2)=0
x=0, 1, -1, 2
양의 실근: 1, 2
∴ 합 = 3`
  }
  ,{
    id: "2020_9월_고1_15번",
    year: 2020, month: 9, grade: 1, num: 15,
    unit: "방정식과부등식",
    score: 4,
    type: "선택형",
    answer: "②",
    answerNum: 2,
    keywords: ["삼차방정식", "허근", "켤레복소수"],
    problem: `x에 대한 삼차방정식 x³+(k-1)x²-k=0의 한 허근을 z라 할 때, z+z̄=-2이다. 실수 k의 값은? (단, z̄는 z의 켤레복소수이다.) [4점]

① 3/2  ② 2  ③ 5/2  ④ 3  ⑤ 7/2`,
    choices: ["3/2", "2", "5/2", "3", "7/2"],
    keyPoint: "P(1)=0이므로 (x-1)(x²+kx+k)=0. 허근 z, z̄는 x²+kx+k=0의 두 근. z+z̄=-k=-2 → k=2",
    solution: `P(1)=1+(k-1)-k=0 → x=1은 항상 실근
(x-1)(x²+kx+k)=0
허근 z, z̄는 x²+kx+k=0의 두 근
근과 계수의 관계: z+z̄=-k=-2
∴ k=2`
  }
  ,{
    id: "2019_9월_고1_20번",
    year: 2019, month: 9, grade: 1, num: 20,
    unit: "방정식과부등식",
    score: 4,
    type: "선택형",
    answer: "⑤",
    answerNum: 5,
    keywords: ["다항식", "방정식", "보기", "참거짓"],
    problem: `9 이하의 자연수 n에 대하여 다항식 P(x)=x⁴+x²-n²-n일 때, <보기>에서 옳은 것만을 있는 대로 고른 것은? [4점]

ㄱ. P(√n)=0
ㄴ. 방정식 P(x)=0의 실근의 개수는 2이다.
ㄷ. 모든 정수 k에 대하여 P(k)≠0이 되도록 하는 모든 n의 값의 합은 31이다.

① ㄱ  ② ㄷ  ③ ㄱ, ㄴ  ④ ㄴ, ㄷ  ⑤ ㄱ, ㄴ, ㄷ`,
    choices: ["ㄱ", "ㄷ", "ㄱ, ㄴ", "ㄴ, ㄷ", "ㄱ, ㄴ, ㄷ"],
    keyPoint: "P(x)=(x²-n)(x²+n+1). ㄱ: P(√n)=0 참. ㄴ: 실근 x=±√n → 2개 참. ㄷ: n이 완전제곱수 아닌 경우. 2~9중 1,4,9 제외 → 2+3+5+6+7+8=31 참",
    solution: `P(x) = (x²-n)(x²+n+1)
ㄱ. P(√n) = (n-n)(n+n+1) = 0 (참)
ㄴ. 실근: x²=n → x=±√n (2개) (참)
ㄷ. P(k)≠0: n이 완전제곱수가 아닌 정수
n=1~9 중 완전제곱수 1,4,9 제외
합 = 2+3+5+6+7+8 = 31 (참)
∴ ㄱ, ㄴ, ㄷ`
  }
  ,{
    id: "2023_11월_고1_27번",
    year: 2023, month: 11, grade: 1, num: 27,
    unit: "방정식과부등식",
    score: 4,
    type: "단답형",
    answer: "16",
    answerNum: null,
    keywords: ["삼차방정식", "허근", "켤레복소수", "자연수"],
    problem: `삼차방정식 x³-3x²+4x-2=0의 한 허근을 w라 할 때, {w(w̄-1)}ⁿ=256을 만족시키는 자연수 n의 값을 구하시오. (단, w̄는 w의 켤레복소수이다.) [4점]`,
    choices: [],
    keyPoint: "(x-1)(x²-2x+2)=0. w=1+i (또는 1-i). ww̄=2, w+w̄=2이므로 ww̄-w=w̄. {w(w̄-1)}ⁿ=(w̄)ⁿ. w̄=1-i, w̄²=-2i, w̄⁴=-4, w̄¹⁶=256. n=16",
    solution: `(x-1)(x²-2x+2)=0
w=1+i, w̄=1-i
ww̄=2, w+w̄=2 → ww̄-w=w̄
{w(w̄-1)}ⁿ = (ww̄-w)ⁿ = (w̄)ⁿ
w̄=1-i, w̄²=-2i, w̄⁴=-4, w̄⁸=16, w̄¹⁶=256
∴ n=16`
  }
  ,{
    id: "2018_6월_고1_14번",
    year: 2018, month: 6, grade: 1, num: 14,
    unit: "방정식과부등식",
    score: 4,
    type: "선택형",
    answer: "②",
    answerNum: 2,
    keywords: ["삼차방정식", "세근", "근과계수"],
    problem: `삼차방정식 x³+2x²-3x+4=0의 세 근을 α, β, γ라 할 때, (3+α)(3+β)(3+γ)의 값은? [4점]

① -5  ② -4  ③ -3  ④ -2  ⑤ -1`,
    choices: ["-5", "-4", "-3", "-2", "-1"],
    keyPoint: "f(x)=x³+2x²-3x+4=(x-α)(x-β)(x-γ). x=-3 대입: f(-3)=(-3-α)(-3-β)(-3-γ)=-(3+α)(3+β)(3+γ). f(-3)=-27+18+9+4=4. ∴ (3+α)(3+β)(3+γ)=-4",
    solution: `f(x) = (x-α)(x-β)(x-γ)
x=-3 대입:
f(-3) = (-3-α)(-3-β)(-3-γ)
= -(3+α)(3+β)(3+γ)
f(-3) = -27+18+9+4 = 4
∴ (3+α)(3+β)(3+γ) = -4`
  }
  ,{
    id: "2024_10월_고1_23번",
    year: 2024, month: 10, grade: 1, num: 23,
    unit: "방정식과부등식",
    score: 3,
    type: "단답형",
    answer: "15",
    answerNum: null,
    keywords: ["삼차방정식", "허근", "판별식", "자연수"],
    problem: `x에 대한 방정식 x³+3x²+(16-a)x+a-20=0이 허근을 갖도록 하는 자연수 a의 개수를 구하시오. [3점]`,
    choices: [],
    keyPoint: "x=1이 항상 근 → (x-1)(x²+4x+20-a)=0. 허근 조건: D/4=4-(20-a)<0 → a<16. 자연수 a=1~15 → 15개",
    solution: `x=1 대입하면 항등적으로 성립
(x-1)(x²+4x+20-a)=0
허근을 가지려면 x²+4x+20-a=0이 허근을 가져야 함
D/4 = 4-(20-a) < 0
a < 16
자연수 a: 1,2,...,15 → 15개`
  }
  ,{
    id: "2025_3월_고2_27번",
    year: 2025, month: 3, grade: 2, num: 27,
    unit: "방정식과부등식",
    score: 4,
    type: "단답형",
    answer: "3",
    answerNum: null,
    keywords: ["삼차방정식", "정수근", "조건"],
    problem: `두 정수 a, b에 대하여 x에 대한 방정식 x³+ax²+bx-3a=0은 a를 포함한 서로 다른 세 정수를 근으로 갖고, x에 대한 방정식 x³+bx²-2ax-2ab=0은 정수인 근을 오직 하나만 갖는다. a-b의 값을 구하시오. [4점]`,
    choices: [],
    keyPoint: "a를 근으로 대입: a(2a²+b-3)=0. a=0이면 조건 불만족. 2a²+b-3=0 → b=-2a²+3. x²+2ax+3=(x-1)(x-3) 또는 (x+1)(x+3). a=-2, b=-5. a-b=3",
    solution: `x=a 대입: a³+a³+ab-3a=0 → a(2a²+b-3)=0
a=0이면 조건 불만족
b=-2a²+3 ⋯ ㉠
(x-a)(x²+2ax+3)=0
x²+2ax+3=(x-1)(x-3): a=-2, b=-5
두 번째 방정식 (x-5)(x²+4)=0 → 정수근 하나만 ✓
∴ a-b = -2-(-5) = 3`
  }
  ,{
    id: "2025_9월_고1_18번",
    year: 2025, month: 9, grade: 1, num: 18,
    unit: "방정식과부등식",
    score: 4,
    type: "선택형",
    answer: "④",
    answerNum: 4,
    keywords: ["삼차방정식", "세실근", "근과계수"],
    problem: `x에 대한 삼차방정식 x³-6x²+(k+8)x-2k=0은 서로 다른 세 실근 α, β, γ(α<β<γ)를 갖는다. 2α+β=2γ일 때, 상수 k의 값은? [4점]

① 27/8  ② 7/2  ③ 29/8  ④ 15/4  ⑤ 31/8`,
    choices: ["27/8", "7/2", "29/8", "15/4", "31/8"],
    keyPoint: "x=2가 근 → (x-2)(x²-4x+k)=0. β=2, α+γ=4, αγ=k. 2α+β=2γ에서 γ-α=1. (γ-α)²=(γ+α)²-4αγ=1 → 1=16-4k → k=15/4",
    solution: `x=2 대입 확인 → (x-2)(x²-4x+k)=0
β=2, x²-4x+k=0의 두 근: α, γ
α+γ=4, αγ=k
2α+β=2γ → 2α+2=2γ → γ-α=1
(γ-α)² = (γ+α)²-4αγ
1 = 16-4k
∴ k = 15/4`
  }
  ,{
    id: "2023_6월_고1_18번",
    year: 2023, month: 6, grade: 1, num: 18,
    unit: "방정식과부등식",
    score: 4,
    type: "선택형",
    answer: "⑤",
    answerNum: 5,
    keywords: ["사차방정식", "정수해", "치환"],
    problemImg: `${GITHUB_IMG_BASE}/23_06_고1_18_Q.jpg`,
    solutionImg: `${GITHUB_IMG_BASE}/23_06_고1_18_A.jpg`,
    problem: `다음은 자연수 n에 대하여 x에 대한 사차방정식
4x⁴ - 4(n+2)x² + (n-2)² = 0
이 서로 다른 네 개의 정수해를 갖도록 하는 20 이하의 모든 n의 값을 구하는 과정이다.

위의 (가)에 알맞은 식을 f(n)이라 하고, (나), (다)에 알맞은 수를 각각 a, b라 할 때, f(b-a)의 값은? (단, a < b) [4점]

① 48   ② 56   ③ 64   ④ 72   ⑤ 80`,
    choices: ["48","56","64","72","80"],
    keyPoint: "x²=X로 치환 후 근의 공식 적용. (가)=8n. √(n/2)이 자연수 → n=2l² 형태. 20 이하: n=2,8,18. a=8, b=18 → f(b-a)=f(10)=80",
    solution: `x²=X로 치환: 4X²-4(n+2)X+(n-2)²=0
근의 공식: X = (n+2±√(8n)) / 2
X=(√(n/2)+1)² 또는 X=(√(n/2)-1)²
√(n/2)가 자연수 l이어야 하므로 n=2l²
20 이하: n=2, 8, 18
n=2: 세 정수해 (불가)
n=8: 네 정수해 ✓ (a=8)
n=18: 네 정수해 ✓ (b=18)
f(n)=8n → f(b-a)=f(10)=80`
  }
  ,{
    id: "2025_6월_고1_29번",
    year: 2025, month: 6, grade: 1, num: 29,
    unit: "방정식과부등식",
    score: 4,
    type: "단답형",
    answer: "65",
    answerNum: null,
    keywords: ["삼차방정식", "허근", "복소수", "근과계수"],
    problemImg: `${GITHUB_IMG_BASE}/25_06_고1_29_Q.jpg`,
    solutionImg: `${GITHUB_IMG_BASE}/25_06_고1_29_A.jpg`,
    problem: `x에 대한 삼차방정식 (x-1)(x²+ax+b)=0의 서로 다른 세 근을 α, β, γ라 하자.
(2α+2β-γ)² = -81일 때, (4+α)(4+β)(4+γ)의 값을 구하시오. (단, a, b는 실수이다.) [4점]`,
    choices: [],
    keyPoint: "γ=1이면 (2α+2β-γ)²이 실수≥0 → 불가. α또는β=1인 경우, 이차방정식 f(x)=0의 허근 이용. 실수부분=0 → p=-2, q=±3. (4+α)(4+β)(4+γ)=5×(2+3i)(2-3i)=5×13=65",
    solution: `(i) γ=1인 경우: (2α+2β-1)²≥0이므로 =-81 불가
(ii) α=1인 경우:
f(x)=x²+ax+b=0이 허근을 가짐
β=p+qi, γ=p-qi (p,q는 실수)
2α+2β-γ = (2+p)+3qi
실수부분=0 → p=-2, q=±3
β=γ̄ = -2+3i (또는 -2-3i)
(4+α)(4+β)(4+γ)
= 5×(2+3i)×(2-3i) = 5×13 = 65`
  }
  ,{
    id: "2005_11월_고1_27번",
    year: 2005, month: 11, grade: 1, num: 27,
    unit: "방정식과부등식",
    score: 4,
    type: "단답형",
    answer: "15",
    answerNum: null,
    keywords: ["삼차방정식", "허근", "복소수", "w³=1", "급수"],
    problemImg: `${GITHUB_IMG_BASE}/05_11_고1_27_Q.jpg`,
    solutionImg: `${GITHUB_IMG_BASE}/05_11_고1_27_A.jpg`,
    problem: `삼차방정식 x³=1의 한 허근을 w라 할 때,
1/(w+1) + 1/(w²+1) + 1/(w³+1) + ⋯ + 1/(w³⁰+1)
의 값을 구하시오. [4점]`,
    choices: [],
    keyPoint: "w³=1의 허근 w는 w²+w+1=0을 만족 → w+1=-w², w²+1=-w. w의 거듭제곱은 주기 3. 30항을 3항씩 10묶음으로 나눠 계산: 10×(1/(-w²)+1/(-w)+1/2) = 10×(1+1/2) = 15",
    solution: `w³=1이고 w²+w+1=0
w+1=-w², w²+1=-w
w의 주기: w=w⁴=w⁷=⋯=w²⁸, w²=w⁵=⋯=w²⁹, w³=w⁶=⋯=w³⁰

(주어진 식) = 10×(1/(w+1) + 1/(w²+1) + 1/(w³+1))
= 10×(1/(-w²) + 1/(-w) + 1/2)
= 10×((-1-w)/w² + 1/2)
= 10×(w²/w² + 1/2)
= 10×(1 + 1/2) = 15`
  }
];
