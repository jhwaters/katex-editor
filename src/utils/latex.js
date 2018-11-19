export const latexfmt = (...a) => String.raw(...a).replace('\\`', '`');

export const latexExamples = {
  change_of_base: latexfmt`\log_{11}(8) = \frac{\ln(8)}{\ln(11)}`,

  circle_volume: latexfmt`V = \frac{4}{3}\pi r^3`,

  complex_trig: latexfmt`re^{i\theta} = r(\cos\theta + i\sin\theta)`,

  demorgans: latexfmt`\lnot (p \land q) \iff (\lnot p \lor \lnot q)`,

  dot_product: latexfmt`\langle 2,6,-1\rangle \cdot \langle -3,4,5\rangle = 13`,

  fundamental_calculus: latexfmt`\int_a^b f'(x)dx = f(b) - f(a)`,

  geometric_series: latexfmt`\sum_{i=1}^n\left(a\cdot r^n\right)
= \frac{a(1 - r^n)}{1-r}`,

  geometry1: latexfmt`\triangle{ABC} \cong \triangle{DEF}
\implies m\angle{CAB} = m\angle{FDE}`,

  identity: latexfmt`e^{i\pi}+1=0`,

  law_of_sines: latexfmt`\frac{\sin{A}}{a} = \frac{\sin{B}}{b} = \frac{\sin{C}}{c}`,

  limit_delta_epsilon: latexfmt`\forall\ \epsilon > 0, x \in \mathbb{R} \\
\exists\ \delta > 0 \text{ such that } \\
0 < |x-c| < \delta \implies |f(x) - L| < \epsilon`,

  matrix_determinant: latexfmt`\left|\begin{array}{c c c}
  a & b & c \\
  d & e & f \\
  g & h & i \\
\end{array}\right|
= aei + bfg + cdh - afh - bdi - ceg`,

  matrix_multiplication: latexfmt`\left[\begin{array}{cc}
  1 & -3 \\ 2 & 5
\end{array}\right] \cdot
\left[\begin{array}{c}
  x \\ y
\end{array}\right] =
\left[\begin{array}{c}
  x-3y \\ 2x+5y
\end{array}\right]`,

  perpendicular: latexfmt`AB \perp BC \iff m\angle{ABC} = 90^\circ`,

  piecewise: latexfmt`a_{n+1} = \left\{
  \begin{array}{l l}
    a_n \div 2 & \text{ if $a_n$ is even} \\
      3a_n + 1 & \text{ if $a_n$ is odd} \\
  \end{array}
\right.`,

  quadratic_formula: latexfmt`x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}`,

  slope: latexfmt`\frac{\text{rise}}{\text{run}} = 
\frac{\Delta y}{\Delta x} = 
\frac{y_2 - y_1}{x_2 - x_1}`,

  taylor_series: latexfmt`\sum_{n=0}^{\infty}\frac{f^{(n)}(a)}{n!}(x-a)^n`,

  vector: latexfmt`\vec{u} = \langle x,y \rangle , \quad
|\vec{u}| = \sqrt{x^2 + y^2}`,

}