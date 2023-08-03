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

``` SQL
SELECT * FROM employees INNER JOIN `salaries` ON `salaries`.`emp_no` = `employees`.`emp_no` ORDER BY `salaries`.`salary` DESC;
```

``` SQL
SELECT * FROM employees INNER JOIN `dept_emp` ON `employees`.`emp_no` = `dept_emp`.`emp_no` ORDER BY `dept_emp`.`dept_no` DESC;
```

``` SQL
SELECT * FROM employees INNER JOIN `titles` ON `employees`.`emp_no` = `titles`.`emp_no` ORDER BY `titles`.`title` DESC;
```

## 課題 2

/var/lib/mysql/aa4eeda1dfac-slow.log