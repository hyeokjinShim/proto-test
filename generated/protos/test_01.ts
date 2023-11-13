/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "test_01";

export interface User {
  name: string;
  password: string;
  age: number;
}

function createBaseUser(): User {
  return { name: "", password: "", age: 0 };
}

export const User = {
  encode(message: User, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.password !== "") {
      writer.uint32(18).string(message.password);
    }
    if (message.age !== 0) {
      writer.uint32(24).int32(message.age);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): User {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.password = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.age = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): User {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      password: isSet(object.password) ? globalThis.String(object.password) : "",
      age: isSet(object.age) ? globalThis.Number(object.age) : 0,
    };
  },

  toJSON(message: User): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
    if (message.age !== 0) {
      obj.age = Math.round(message.age);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<User>, I>>(base?: I): User {
    return User.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<User>, I>>(object: I): User {
    const message = createBaseUser();
    message.name = object.name ?? "";
    message.password = object.password ?? "";
    message.age = object.age ?? 0;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
