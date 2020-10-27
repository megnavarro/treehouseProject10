// const url = "http://localhost:5000/api/courses/";
// const getState = ({ getData, setData }) => {
// 	return {
// 		data: {
// 			courses: []
// 		},
// 		actions: {
// 			loadCourses() {
// 				fetch(url, {
// 					method: "GET",
// 					headers: { "Content-type": "application/json; charset=utf-8" },                    
//                 })
// 					.then(response => response.json())
// 					.then(result => {
// 						console.log("Courses received.");
// 							setData({
// 								courses: result
// 							});
// 					})
// 					.catch(e => console.error(e));
// 			},
// 			addCourse(title, description, estimatedTime, materialsNeeded) {
// 				fetch(url, {
// 					method: "post",
// 					headers: { "Content-type": "application/json; charset=utf-8" },
// 					body: JSON.stringify({
// 						title,
// 						description,
// 						estimatedTime,
// 						materialsNeeded,
// 					})
// 				}).then(() => {
// 					fetch(url)
// 						.then(response => response.json())
// 						.then(result => {
// 							console.log("result", result);
// 								setData({
// 									courses: result
// 								});
// 						})
// 						.catch(e => console.error(e));
// 				});
// 			},
// 			editContact(id, title, description, estimatedTime, materialsNeeded) {
// 				fetch(url + id, {
// 					method: "put",
// 					headers: { "Content-type": "application/json; charset=utf-8" },
// 					body: JSON.stringify({
// 						title,
// 						description,
// 						estimatedTime,
// 						materialsNeeded,
// 					})
// 				}).then(() => {
// 					fetch(url)
// 						.then(response => response.json())
// 						.then(result => {
// 							console.log("updated", result);
// 								setData({
// 									courses: result
// 								});
// 						})
// 						.catch(e => console.error(e));
// 				});
// 			},
// 			deleteContact(id) {
// 				fetch(url + id, {
// 					method: "delete"
// 				}).then(() => {
// 					fetch(url)
// 						.then(response => response.json())
// 						.then(result => {
// 							console.log("Deleted", result);
// 								setData({
// 									courses: result
// 								});
// 						})
// 						.catch(e => console.error(e));
// 				});
// 			}
// 		}
// 	};
// };

// export default getState;