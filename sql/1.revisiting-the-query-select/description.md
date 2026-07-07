Query all columns for all American cities in the CITY table with populations larger than 100000. The CountryCode for America is USA.

The CITY table is described as follows:

| Field | Type |
|-------|------|
| ID | NUMBER |
| NAME | VARCHAR2(17) |
| COUNTRYCODE | VARCHAR2(3) |
| DISTRICT | VARCHAR2(20) |
| POPULATION | NUMBER |

## Answer:

SELECT * — returns all columns (ID, NAME, COUNTRYCODE, DISTRICT, POPULATION)
WHERE COUNTRYCODE = 'USA' — filters to American cities only
AND POPULATION > 100000 — filters to cities with population strictly greater than 100,000

That's all you need — no need for ORDER BY or GROUP BY since the question just asks for a filtered list of all columns.
