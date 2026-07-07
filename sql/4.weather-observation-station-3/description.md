Query a list of CITY names from STATION for cities that have an even ID number. Print the results in any order, but exclude duplicates from the answer.

The STATION table is described as follows:

How it works:

SELECT DISTINCT CITY: returns city names, removing duplicates
FROM STATION: pulls from the STATION table
WHERE MOD(ID, 2) = 0: MOD(ID, 2) gives the remainder when ID is divided by 2; if that remainder is 0, the ID is even

You could also write the even check as WHERE ID MOD 2 = 0 in some SQL dialects, but MOD(ID, 2) = 0 is the standard, widely-portable form (works in Oracle, MySQL, PostgreSQL, etc.).
