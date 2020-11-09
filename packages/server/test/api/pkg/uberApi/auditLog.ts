/* eslint-disable */
// @ts-nocheck
// generated by free-swagger

import { IPagedResult, AuditLogListDto } from "./interface/index.ts";
import axios, { AxiosResponse } from "axios";

export const GetAuditLogs = (params: { StartDate?: string }) =>
  axios.request<IPagedResult<AuditLogListDto>, AxiosResponse<IPagedResult<AuditLogListDto>>>({
    url: `/v1/api/services/app/AuditLog/GetAuditLogs`,
    method: "get",
    params: params,
    data: {}
  });
