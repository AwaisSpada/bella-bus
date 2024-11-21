import { Box, Text } from "@adminjs/design-system";
const Dashboard = () => {
  return (
    //Parent Box
    <Box style={{ padding: "20px" }}>
      <Box>
        <Box width={[1, 1, 1, 1]} variant="card">
          {" "}
          <Text
            lineHeight="1"
            fontFamily="fantasy"
            fontSize="40px"
            textAlign="center"
          >
            Welcome on Board !
          </Text>{" "}
        </Box>
      </Box>
    </Box> //End Parent Box
  );
};
export default Dashboard;
