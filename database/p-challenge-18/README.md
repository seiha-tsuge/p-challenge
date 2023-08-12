# 課題 18

## 課題 1

### 課題 1-1

``` SQL
SHOW variables LIKE 'slow_query%';
```

| Variable_name       | Value                                    |
| ------------------- | ---------------------------------------- |
| slow_query_log      | OFF                                      |
| slow_query_log_file | /var/lib/mysql/aa4eeda1dfac-slow.log     |

``` SQL
SET GLOBAL slow_query_log = 'ON';
```

``` SQL
SHOW variables LIKE 'slow_query%';
```

| Variable_name       | Value                                    |
| ------------------- | ---------------------------------------- |
| slow_query_log      | ON                                       |
| slow_query_log_file | /var/lib/mysql/aa4eeda1dfac-slow.log     |

### 課題 1-2

``` SQL
SET GLOBAL long_query_time = 0.1;
```

``` SQL
SHOW GLOBAL variables LIKE 'long_query_time%';
```

### 課題 1-3

``` SQL
SHOW VARIABLES LIKE 'slow_query_log_file';
```

``` SQL
SELECT * FROM dept_manager LIMIT 30;
```

``` SQL
SELECT * FROM departments LIMIT 30;
```

``` SQL
SELECT * FROM employees WHERE `employees`.`birth_date` = '1953-09-02' LIMIT 1;
```

### 課題 1-4

10年以上勤務し、給与が平均以上の従業員のリスト

``` SQL
SELECT e.emp_no, e.first_name, e.last_name, e.hire_date, s.salary
FROM employees e
JOIN salaries s ON e.emp_no = s.emp_no
WHERE DATEDIFF(CURRENT_DATE, e.hire_date) > 3650
AND s.salary > (
    SELECT AVG(salary) FROM salaries
)
AND s.to_date = '9999-01-01';
```

各部門の最高給与を受け取っている従業員

``` SQL
SELECT d.dept_no, d.dept_name, e.emp_no, e.first_name, e.last_name, s.salary
FROM departments d
JOIN dept_emp de ON d.dept_no = de.dept_no
JOIN employees e ON de.emp_no = e.emp_no
JOIN salaries s ON e.emp_no = s.emp_no
JOIN (
    SELECT d.dept_no, MAX(s.salary) as max_salary
    FROM departments d
    JOIN dept_emp de ON d.dept_no = de.dept_no
    JOIN salaries s ON de.emp_no = s.emp_no
    WHERE s.to_date = '9999-01-01'
    GROUP BY d.dept_no
) as max_salaries
ON d.dept_no = max_salaries.dept_no AND s.salary = max_salaries.max_salary
WHERE s.to_date = '9999-01-01';
```

各部門で平均給与が全社平均よりも高い部門のリスト

``` SQL
SELECT d.dept_no, d.dept_name, AVG(s.salary) as avg_salary_per_dept
FROM departments d
JOIN dept_emp de ON d.dept_no = de.dept_no
JOIN salaries s ON de.emp_no = s.emp_no
WHERE s.to_date = '9999-01-01'
GROUP BY d.dept_no, d.dept_name
HAVING avg_salary_per_dept > (
    SELECT AVG(salary) FROM salaries WHERE to_date = '9999-01-01'
);
```

## 課題 2

### 最も頻度高くスロークエリに現れるクエリの特定

``` bash
mysqldumpslow -s c -t 1 /var/lib/mysql/aa4eeda1dfac-slow.log
```
- -s c: クエリのカウント順にソート
- -t 1: 上位1件のみ表示

### 実行時間が最も長いクエリ

``` bash
mysqldumpslow -s t -t 1 /var/lib/mysql/aa4eeda1dfac-slow.log
```
- -s t: クエリの実行時間順にソート

### ロック時間が最も長いクエリの特定

``` bash
mysqldumpslow -s l -t 1 /var/lib/mysql/aa4eeda1dfac-slow.log
```