Query the NAME field for all American cities in the CITY table with populations larger than 120000. The CountryCode for America is USA.

The CITY table is described as follows:

| Field | Type |
|-------|------|
| ID | NUMBER |
| NAME | VARCHAR2(17) |
| COUNTRYCODE | VARCHAR2(3) |
| DISTRICT | VARCHAR2(20) |
| POPULATION | NUMBER |

## Answer:

- SELECT NAME : returns only the NAME column (not the full row), since that's all the question asks for
- FROM CITY : pulls from the CITY table
WHERE COUNTRYCODE = 'USA' : filters rows down to only American cities (matching the given CountryCode)
AND POPULATION > 120000 : further filters to only those cities where population is strictly greater than 120,000 (both conditions must be true, since they're joined by AND)
