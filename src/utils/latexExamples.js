import latexfmt from './latexfmt'



export const circle_volume = latexfmt`V = \frac{4}{3}\pi r^3`

export const combination = latexfmt`\binom{n}{k} = \frac{n!}{k!(n-k)!}`

export const complex_trig = latexfmt`re^{i\theta} = r(\cos\theta + i\sin\theta)`

export const demorgans = latexfmt`\lnot (p \land q) \iff (\lnot p \lor \lnot q)`

export const dot_product = latexfmt`\langle 2,6,-1\rangle \cdot \langle -3,4,5\rangle = 13`

export const fundamental_calculus = latexfmt`\int_a^b f'(x)dx = f(b) - f(a)`

export const geometric_series = latexfmt`\sum_{i=1}^n\left(a\cdot r^n\right)
= \frac{a(1 - r^n)}{1-r}`

export const geometry = latexfmt`\triangle{ABC} \cong \triangle{DEF}
\implies m\angle{CAB} = m\angle{FDE}`

export const identity = latexfmt`e^{i\pi}+1=0`

export const law_of_sines = latexfmt`\frac{\sin A}{a} = \frac{\sin B}{b} = \frac{\sin C}{c}`

export const limit_delta_epsilon = latexfmt`\forall\ \epsilon > 0, x \in \mathbb{R} \\
\exists\ \delta > 0 \text{ such that } \\
0 < |x-c| < \delta \implies |f(x) - L| < \epsilon`

export const matrix_determinant = latexfmt`\left|\begin{array}{c c c}
  a & b & c \\
  d & e & f \\
  g & h & i \\
\end{array}\right|
= aei + bfg + cdh - afh - bdi - ceg`

export const matrix_multiplication = latexfmt`\left[
  \begin{array}{rr}
    1 & -3 \\
    2 & 5
  \end{array}
\right]
\cdot
\left[
  \begin{array}{r}
    x \\
    y
  \end{array}
\right]
=
\left[
  \begin{array}{r}
    x-3y \\
    2x+5y
  \end{array}
\right]`

export const perpendicular = latexfmt`\overleftrightarrow{AB} \perp \overline{BC} \iff m\angle{ABC} = 90^\circ`

export const piecewise = latexfmt`a_{n+1} = \left\{
  \begin{array}{l l}
    a_n \div 2 & \text{ if $a_n$ is even} \\
      3a_n + 1 & \text{ if $a_n$ is odd} \\
  \end{array}
\right.`

export const quadratic_formula = latexfmt`x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}`

export const slope = latexfmt`\frac{\text{rise}}{\text{run}} = 
\frac{\Delta y}{\Delta x} = 
\frac{y_2 - y_1}{x_2 - x_1}`

export const sum_of_cubes = latexfmt`(a^3 + b^3) = (a + b)(a^2 - ab + b^2)`

export const taylor_series = latexfmt`\sum_{n=0}^{\infty}\frac{f^{(n)}(a)}{n!}(x-a)^n`

export const vector = latexfmt`\vec{u} = \langle x,y \rangle , \quad
|\vec{u}| = \sqrt{x^2 + y^2}`