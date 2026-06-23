import { Injectable, NotFoundException } from "@nestjs/common";
import { normalizeText } from "../common/text.util";
import { TECH_STACKS } from "./stack.data";

@Injectable()
export class StacksService {
  findAll() {
    return TECH_STACKS;
  }

  findOne(idOrName: string) {
    const keyword = normalizeText(idOrName);
    const stack = TECH_STACKS.find((item) => {
      if (item.id === idOrName) return true;
      if (normalizeText(item.name) === keyword) return true;
      return item.aliases.some((alias) => normalizeText(alias) === keyword);
    });

    if (!stack) {
      throw new NotFoundException("Tech stack not found");
    }

    return stack;
  }
}
