"use strict";
// interface IPayment {
// 	sum: number,
// 	from: number,
// 	to: number
// }
//
// enum PaymentStatus {
// 	Success = 'success',
// 	Failed = 'failed'
// }
//
// interface IPaymentRequest extends IPayment {
// }
//
// // Не лучший вариант!!!
// // interface IDataSuccess extends IPayment {
// // 	databaseId: number
// // }
// //
// // interface IDataFailed {
// // 	errorMessage: string,
// // 	errorCode: number
// // }
// //
// // interface IResponse {
// // 	status: PaymentStatus;
// // 	data: IDataSuccess | IDataFailed
// // }
// interface IDataFailed {
// 	errorMessage: string,
// 	errorCode: number
// }
//
// interface IDataSuccess extends IPayment {
// 	databaseId: number
// }
//
// interface IResponseSuccess {
// 	status: PaymentStatus.Success,
// 	data: IDataSuccess
// }
//
// interface IResponseFailed {
// 	status:PaymentStatus.Failed,
// 	data:IDataFailed
// }