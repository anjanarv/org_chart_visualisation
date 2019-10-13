const peopleInGivenCodingChallenge = require("../../data/peopleInGivenCodingChallenge.json");
const peopleWithNoId = require("../../data/peopleWithNoId.json");
const { validateJSON, convertToVisFormat } = require("./orgHierarchy.utils");

test("validating json having valid data", () => {
  let { validPersons, invalidPersons } = validateJSON(
    peopleInGivenCodingChallenge
  );
  expect(validPersons).toMatchSnapshot();
  expect(invalidPersons).toMatchSnapshot();
});

test("validating json having invalid data", () => {
  let { validPersons, invalidPersons } = validateJSON(peopleWithNoId);

  expect(validPersons).toMatchSnapshot();
  expect(invalidPersons).toMatchSnapshot();
});

test("validating json having empty data", () => {
  let { validPersons, invalidPersons } = validateJSON([]);

  expect(validPersons).toStrictEqual([]);
  expect(invalidPersons).toStrictEqual([]);
});

test("test convert to vis format with valid data ", () => {
  const mockFn = jest.fn();
  const mockFnEdges = jest.fn();

  const nodesMockFn = mockFn.mockImplementationOnce(() => [
    {
      data: () => {
        return { name: "xyz", id: "100" };
      }
    }
  ]);
  const edgesMockFn = mockFnEdges.mockImplementationOnce(() => [
    {
      data: () => {
        return { source: "100", target: "200" };
      }
    }
  ]);
  const taskGraph = { nodes: mockFn, edges: mockFnEdges };

  let { dataList, edgesList, invalidDataList } = convertToVisFormat(
    taskGraph,
    []
  );
  expect(edgesList.length).toStrictEqual(1);
  expect(invalidDataList.length).toStrictEqual(0);
  expect(dataList.length).toStrictEqual(1);
});

test("test convert to vis format with invalid data - with no id ", () => {
  const mockFn = jest.fn();
  const mockFnEdges = jest.fn();

  const nodesMockFn = mockFn.mockImplementationOnce(() => [
    {
      data: () => {
        return { name: "xyz" };
      }
    }
  ]);
  const edgesMockFn = mockFnEdges.mockImplementationOnce(() => [
    {
      data: () => {
        return { source: "100", target: "200" };
      }
    }
  ]);
  const taskGraph = { nodes: mockFn, edges: mockFnEdges };

  let { dataList, edgesList, invalidDataList } = convertToVisFormat(
    taskGraph,
    []
  );
  expect(edgesList.length).toStrictEqual(1);
  expect(invalidDataList.length).toStrictEqual(1);
  expect(dataList.length).toStrictEqual(0);
});
